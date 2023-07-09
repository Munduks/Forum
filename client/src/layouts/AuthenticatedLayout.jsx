import Footer from "../components/Footer/Footer";
import Topbar from "../components/Topbar/Topbar";

const AuthenticatedLayout = ({ children }) => {
  return (
    <>
      <Topbar />
      <div className="authenticated-container">{children}</div>
      <Footer/>
    </>
  );
};

export default AuthenticatedLayout;
