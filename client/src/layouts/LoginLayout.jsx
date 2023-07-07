import "./Layout.css";

const LoginLayout = ({ children }) => {
  return (
    <div className="login-container">
      <img src="https://gerryontour.de/wp-content/uploads/2017/08/forum-icon-20-150x150.png" alt="logo" />
      <h1>Q&A FORUM!</h1>
      {children}
    </div>
  );
};

export default LoginLayout;
