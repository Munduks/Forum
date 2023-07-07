import { UserContext } from "../../context/UserContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { LOGIN_ROUTE } from "../../routes/const";
import FormItem from "../../components/FormItem/FormItem";
import Button from "../../components/Button/Button";
import "./Registration.scss"

const Registration = () => {
  const { handleRegister } = useContext(UserContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
     
      const response = await axios.post ("http://localhost:3000/register", { name,
      email,
      password});
      console.log(response.data);
       
    handleRegister(response.data);
  } catch (error) {
    console.error(error);
  }
  };

  return (
    <div className="sign-container">
      <h1>Sign In!</h1>
      <form className="form" onSubmit={handleSubmit}>
      <FormItem
          label="Name"
          containerClassname="form-item"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
         <FormItem
          label="Email"
          containerClassname="form-item"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <FormItem
          label="Password"
          containerClassname="form-item"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error">{setError}</p>}
        <div className="button-container">
        <Button type="submit">Register</Button>
        <p>
        Already have an account? <Link to={LOGIN_ROUTE}>Login</Link>
      </p> 
        </div>
      </form> 
    </div>
  );
};

export default Registration;

// <div className="container">
//       <form className="form" onSubmit={handleSubmit}>
//       <FormItem
//           label="Name"
//           containerClassname="form-item"
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <FormItem
//           label="Email"
//           containerClassname="form-item"
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <FormItem
//           label="Password"
//           containerClassname="form-item"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         {error && <p className="error">{error}</p>}
//         <div className="button-container">
//           <Button>Login</Button>
//           <Link to={REGISTER_ROUTE}>Register</Link>
//         </div>
//       </form>
//     </div>