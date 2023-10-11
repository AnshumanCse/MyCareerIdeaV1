import { BsChevronDown } from "react-icons/bs";
import { RiMenuFoldLine } from "react-icons/ri";
import "../../styles/navbar.css";
import Image from "next/image";
import logo from "../../../public/imgs/logo/MycareerIdea.jpeg";
const Header = () => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <Image src={logo} alt="logo" />
      </div>
      <div className="nav-right"></div>
      <ul>
        <li>
          For Students
          <BsChevronDown />
        </li>
        <li>
          For Institutions
          <BsChevronDown />
        </li>
        <li>Career Guidance</li>
        <li>About Us</li>
      </ul>
      <div className="menu">
        <RiMenuFoldLine size="30px" />
      </div>
    </div>
  );
};

export default Header;
