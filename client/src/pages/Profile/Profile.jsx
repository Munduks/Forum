import { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import FormItem from "../../components/FormItem/FormItem";
import Button from "../../components/Button/Button";
import "./Profile.scss";

const Profile = () => {
  const { user, handleLogout } = useContext(UserContext);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);


  return (
    <form className="profile-form" >
      <FormItem
        label="Name"
        containerClassname="form-item"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
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
      <div className="button-container">
        <Button type="button" variant="outlined" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </form>
  );
};

export default Profile;
