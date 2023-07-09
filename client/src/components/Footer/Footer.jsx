import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import "./Footer.scss"

const Footer = () => {
  const currentDate = new Date().getFullYear();

  const handleIconClick = (url) => {
    window.open(url, "_blank"); // Atidaro naują langą su nurodytu URL
  };

  return (
    <footer className="footer-container">
      <div><img className="headerLogo" src="https://gerryontour.de/wp-content/uploads/2017/08/forum-icon-20-150x150.png" alt="logo" />
      </div>
      <div><p>© Q & A FORUM {currentDate}</p></div>
      <div className="navigation-items">
      
       <a  href="https://www.facebook.com/" onClick={() => handleIconClick("https://www.facebook.com/")}>
        <FaFacebook />
      </a>
      <a href="https://github.com/">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/" >
        <FaInstagram />
      </a>
      
      </div>
     
      
      
      
     
    </footer>
  );
};

export default Footer;