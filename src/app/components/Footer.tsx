import "../../styles/footer.css";
import Image from "next/image";
import logo from "../../../public/imgs/logo/MycareerIdea.jpeg";
// import {logo} from "../../public/imgs/logo/MycareerIdea.jpeg"
import { GrLocation } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="footer">
      <div className="foot-logo">
        <Image src={logo} alt="logo" />

        <span>
          {" "}
          <GrLocation />
          Noida, india
        </span>
      </div>
      <div className="foot-list-2">
        Top Cources
        <ul>
          <li>B.Tech/B.E</li>
          <li>M.B.A </li>
          <li>MCA</li>
          <li>BCA</li>
          <li>M.Tech</li>
          <li>B.Sc</li>
          <li>BA, MA</li>
        </ul>
      </div>
      <div className="foot-list-1">
        <span>Top Universities for</span>
        <li>Engineering </li>
        <li>Management</li>
        <li> Medical</li>
        <li> Law</li>
        <li>Commerce</li>
        <li>Science</li>
        <li>Arts</li>
      </div>
    </div>
  );
};

export default Footer;
