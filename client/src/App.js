// import React, { useState } from "react"; //useEffect
import "./index.css";
// import { BrowserRouter as Routes, Route } from "react-router-dom"; //Routery
import Registration from "./components/Registration/Registration";

import Login from "./components/Login/Login";

const App = () => {
  return (
    <div className="App">
      <Registration />
      <Login />
    </div>
  );
};
export default App;
