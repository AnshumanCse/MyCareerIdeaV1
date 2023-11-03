import { BsChevronDown } from "react-icons/bs";

import "../../styles/navbar.css";
import Image from "next/image";
import logo from "../../../public/imgs/logo/MycareerIdea.jpeg";
import MobileMenu from "./Togglebtn";

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
        <MobileMenu />
      </div>
    </div>
  );
};

export default Header;
