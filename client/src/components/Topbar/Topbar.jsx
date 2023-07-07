import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { PROFILE_ROUTE, topbarNavigationItems } from "../../routes/const";
import { FaUserCircle } from "react-icons/fa";

import "./Topbar.scss";

const Topbar = () => {
  const { user } = useContext(UserContext);
  
  const showUserFullName = (user) => {
    return user ? `${user.name} ` : "";
  };

  return (
    <nav className="navigation">
      <div><img className="headerLogo" src="https://gerryontour.de/wp-content/uploads/2017/08/forum-icon-20-150x150.png" alt="logo" />
      </div>
      <div className="navigation-items">
        {topbarNavigationItems.map((navItem) => (
          <Link to={navItem.route} key={navItem.title}>
            {navItem.title}
          </Link>
        ))}
      </div>
      <Link to={PROFILE_ROUTE} className="user-container">
        <FaUserCircle />
        {showUserFullName(user)}
      </Link>
    </nav>
  );
};

export default Topbar;
