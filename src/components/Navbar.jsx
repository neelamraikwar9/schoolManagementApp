import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="navContainer">
          <li className="listItem" style={{ fontSize: "1.5rem" }}>
            <Link to="/">Student Management System</Link>
          </li>
          <li className="listItem pdgTop">
            <Link to="/">Students</Link>
          </li>
          <li className="listItem pdgTop">
            <Link to="/classView">Classes</Link>
          </li>
          <li className="listItem pdgTop">
            <Link to="/schoolView">School</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
