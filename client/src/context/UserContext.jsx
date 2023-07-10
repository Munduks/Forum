
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, PROFILE_ROUTE } from "../routes/const";
import axios from "axios";

const UserContext = createContext({
  user: null,
  isLoggedIn: false,
  handleLogin: () => null,
  handleLogout: () => null,
  handleRegister: () => null,
});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user"))); // null | {email: "test", password: "asd123"}
  const isLoggedIn = !!user; // null | {email: "test", password: "asd123"}
  const navigate = useNavigate();

  const checkUserCredentials = (users, checkingUser) => {
    return users.find(
      (user) =>
        user.email === checkingUser.email 
    );
  };
  

  const handleLogin = async (user, setError) => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      const existingUser = checkUserCredentials(response.data, user);
      if (existingUser) {
        setUser(existingUser);
        localStorage.setItem("user", JSON.stringify(existingUser));
        navigate(PROFILE_ROUTE);
      } else {
        setError("User email is incorrect.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.setItem("user", null);
    navigate(LOGIN_ROUTE);
  };

  const handleRegister = async (newUser) => {
    try {
      const response = await axios.post("http://localhost:3000/register", newUser);
      console.log(response.data);
      navigate(LOGIN_ROUTE);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <UserContext.Provider
      value={{
        user,
        isLoggedIn,
        handleLogin,
        handleLogout,
        handleRegister,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
