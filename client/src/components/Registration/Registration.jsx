import React, { useState } from "react";
import "./Registration.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();

  const [registerForm, setRegisterForm] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setRegisterForm({
      ...registerForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!handleValidation()) {
      setMessage("Form was filled out incorrectly");
      return false;
    }

    if (registerForm.password !== registerForm.confirm_password) {
      setMessage("Password do not match");
      return false;
    }

    axios
      .post("http://localhost:3000/register", registerForm)
      .then((resp) => {
        setMessage(resp.data.message);
        if (resp.data.status === "success") {
          setTimeout(() => {
            navigate("/login");
          }, 1500);
        }
      })
      .catch(() => {
        setMessage("Server error");
      });
  };

  const handleValidation = () => {
    for (let index of Object.keys(registerForm)) {
      if (registerForm[index] === "") {
        return false;
      }
    }

    return true;
  };

  return (
    <>
      <section className="h-90">
        <div className="container registerMain">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col">
              <div className="card cardMain">
                <div className="row g-0 formBackground">
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <div className="loginLogo">
                        <img
                          className="loginLogoImg"
                          src="https://static.wixstatic.com/media/dfa345_1a5420375dfe442992cd34cba3db47e8~mv2.png/v1/fill/w_1150,h_425,al_c,lg_1,q_90,enc_auto/Home_logo_v03.png"
                          alt="Logo"
                        ></img>
                      </div>
                      <h5 className="signInHeading">Register new account</h5>
                      <hr></hr>
                      {message && <p className="message">{message}</p>}
                      <form onSubmit={handleSubmit} className="formMain">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              name="username"
                              value={registerForm.username}
                              onChange={handleInputChange}
                              type="text"
                              className="form-control form-control-lg"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example1m"
                            >
                              Name
                            </label>
                          </div>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            name="email"
                            value={registerForm.email}
                            onChange={handleInputChange}
                            type="email"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" htmlFor="form3Example8">
                            Email address
                          </label>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            name="password"
                            value={registerForm.password}
                            onChange={handleInputChange}
                            type="password"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" htmlFor="form3Example9">
                            Password
                          </label>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            name="confirm_password"
                            value={registerForm.confirm_password}
                            onChange={handleInputChange}
                            type="password"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" htmlFor="form3Example9">
                            Confirm Password
                          </label>
                        </div>
                        <div className="pt-1 mb-4">
                          <button type="submit" className="loginFormBtn">
                            REGISTER
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;

// import React from "react";
// import { useState } from "react";
// import "./Registration.scss";
// // import Alert from "react-bootstrap/Alert";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// // import Button from "react-bootstrap/esm/Button";

// const Registration = () => {
//   const navigate = useNavigate();

//   const [registerForm, setRegisterForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [messages, setMessages] = useState({ message: "", status: "" });

//   const handleInputChange = (e) => {
//     setRegisterForm({
//       ...registerForm,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!handleValidation()) {
//       setMessages({
//         message: "Form was filled out incorrectly",
//         status: "danger",
//       });
//       return false;
//     }

//     if (registerForm.password !== registerForm.confirm_password) {
//       setMessages({ message: "Password do not match", status: "danger" });
//       return false;
//     }

//     axios
//       .post("http://localhost:3000/register", registerForm)
//       .then((resp) => {
//         setMessages({ message: resp.data.message, status: resp.data.status });
//         if (resp.data.status === "success") {
//           setTimeout(() => {
//             navigate("/login");
//           }, 1500);
//         }
//       })
//       .catch(() => {
//         setMessages({ message: "Server error", status: "danger" });
//       });
//   };

//   const handleValidation = () => {
//     for (let index of Object.keys(registerForm)) {
//       if (registerForm[index] === "") {
//         return false;
//       }
//     }

//     return true;
//   };
//   return (
//     <>
//       <section class="h-90">
//         <div class="container registerMain">
//           <div class="row d-flex justify-content-center align-items-center">
//             <div class="col">
//               <div class="card cardMain">
//                 <div class="row g-0 formBackground">
//                   {/* <div class="col-lg-6 d-none d-md-block">
//                     <img
//                       src="https://ipfs.pixura.io/ipfs/QmZMEp9HnW56LPWNXPKC293RtBXp4RD7N3A1eApg4rr5ju/PrideII.jpg"
//                       alt="Sample photo"
//                       class="img-fluid"
//                     />
//                   </div> */}
//                   <div class="col-xl-6">
//                     <div class="card-body p-md-5 text-black">
//                       {/* {messages.message && (
//                         <Alert variation={messages.status}>
//                           {messages.message}
//                         </Alert>
//                       )} */}
//                       <div className="loginLogo">
//                         <img
//                           className="loginLogoImg"
//                           src="https://static.wixstatic.com/media/dfa345_1a5420375dfe442992cd34cba3db47e8~mv2.png/v1/fill/w_1150,h_425,al_c,lg_1,q_90,enc_auto/Home_logo_v03.png"
//                         ></img>
//                       </div>
//                       <h5 className="signInHeading">Register new account</h5>
//                       <hr></hr>
//                       <form onSubmit={handleSubmit} className="formMain">
//                         {/* <div class="row"> */}
//                         <div class="col-md-6 mb-4">
//                           <div class="form-outline">
//                             <input
//                               name="name"
//                               value={registerForm.name}
//                               onChange={handleInputChange}
//                               type="text"
//                               class="form-control form-control-lg"
//                             />
//                             <label class="form-label" for="form3Example1m">
//                               Name
//                             </label>
//                           </div>
//                         </div>
//                         {/* </div> */}
//                         <div class="form-outline mb-4">
//                           <input
//                             name="email"
//                             value={registerForm.email}
//                             onChange={handleInputChange}
//                             type="email"
//                             class="form-control form-control-lg"
//                           />
//                           <label class="form-label" for="form3Example8">
//                             Email address
//                           </label>
//                         </div>
//                         <div class="form-outline mb-4">
//                           <input
//                             name="password"
//                             value={registerForm.password}
//                             onChange={handleInputChange}
//                             type="password"
//                             class="form-control form-control-lg"
//                           />
//                           <label class="form-label" for="form3Example9">
//                             Password
//                           </label>
//                         </div>
//                         <div class="pt-1 mb-4">
//                           <button type="submit" className="loginFormBtn">
//                             REGISTER
//                           </button>
//                         </div>
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };
// export default Registration;

// import { useState } from "react";

// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleRegister = (e) => {
//     e.preventDefault();

//     // Sukurkite POST užklausą naudodami 'fetch' arba kitą HTTP biblioteką
//     fetch("http://localhost:3000/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ name, email, password }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Apdorokite atsakymą arba atlikite veiksmus po sėkmingos registracijos
//         console.log(data);
//       })
//       .catch((error) => {
//         // Apdorokite klaidą arba atlikite veiksmus klaidos atveju
//         console.error(error);
//       });
//   };

//   return (
//     <form onSubmit={handleRegister}>
//       <input
//         type="text"
//         placeholder="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default Register;
