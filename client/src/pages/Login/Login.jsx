import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import FormItem from "../../components/FormItem/FormItem";
import Button from "../../components/Button/Button";
import { REGISTER_ROUTE } from "../../routes/const";
import "./Login.scss";

const Login = () => {
  const { handleLogin } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, password };
    handleLogin(user, setError);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <FormItem
          label="Email"
          containerClassname="form-item"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <FormItem
          label="Password"
          containerClassname="form-item"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>}
        <div className="button-container">
          <Button>Login</Button>
          <Link to={REGISTER_ROUTE}>Register</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
// import { useState } from "react";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Sukurkite POST užklausą naudodami 'fetch' arba kitą HTTP biblioteką
//     fetch("http://localhost:3000/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email, password }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Apdorokite atsakymą arba atlikite veiksmus po sėkmingo prisijungimo
//         console.log(data);
//       })
//       .catch((error) => {
//         // Apdorokite klaidą arba atlikite veiksmus klaidos atveju
//         console.error(error);
//       });
//   };

//   return (
//     <form onSubmit={handleLogin}>
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
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;