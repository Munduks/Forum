import { UserContext } from "../../context/UserContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LOGIN_ROUTE } from "../../routes/const";
import FormItem from "../../components/FormItem/FormItem";
import Button from "../../components/Button/Button";
import "./Registration.scss";

const Registration = () => {
  const { handleRegister } = useContext(UserContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, email, password };
    handleRegister(user);
  };

  return (
    <div className="sign-container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Sign In!</h1>
        <FormItem
          label=""
          containerClassname="form-item"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <FormItem
          label=""
          containerClassname="form-item"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <FormItem
          label=""
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
