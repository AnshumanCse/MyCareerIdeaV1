import React from "react";
import "../../styles/home.css";
import { MdEngineering } from "react-icons/md";
import { BiSolidShoppingBags } from "react-icons/bi";
import { GiMaterialsScience } from "react-icons/gi";
import { BiSolidColorFill } from "react-icons/bi";
import { MdAgriculture } from "react-icons/md";
import { BiSolidBarChartSquare } from "react-icons/bi";
import { FaUserDoctor } from "react-icons/fa6";
import { FaComputer } from "react-icons/fa6";
import { PiFilesFill } from "react-icons/pi";

// const Card = (props) => {
//   return (
//     <div className="card">
//       <span>{props.name}</span>
//       <p>View Coureces</p>
//     </div>
//   );
// };

const StudyDomain = () => {
  return (
    <div className="study-domain">
      <div className="heading">
        <h2>Choose Your Study Domain or Course</h2>
        <p>Search your college easily by selecting your domain or course</p>
      </div>
      <div className="domain-cards">
        <div className="card engineering">
          <MdEngineering size="10vmin" color="#3985a6" />
          <span>Management</span>
          <p>View Details</p>
        </div>
        <div className=" card management">
          <BiSolidShoppingBags size="10vmin" color="#3985a6" />
          <span>Management</span>
          <p>View Details</p>
        </div>
        <div className="card science">
          <GiMaterialsScience size="10vmin" color="#3985a6" />
          <span>Science</span>

          <p>View Details</p>
        </div>
        <div className="card arts">
          <BiSolidColorFill size="10vmin" color="#3985a6" />
          <span>Arts</span>
          <p>View Details</p>
        </div>
        <div className="card arts">
          <MdAgriculture size="10vmin" color="#3985a6" />
          <span>Agriculture</span>
          <p>View Details</p>
        </div>
        <div className="card arts">
          <BiSolidBarChartSquare size="10vmin" color="#3985a6" />
          <span>Commerce</span>
          <p>View Details</p>
        </div>
        <div className="card arts">
          <FaUserDoctor size="10vmin" color="#3985a6" />
          <span>Doctors</span>
          <p>View Details</p>
        </div>
        <div className="card arts">
          <FaComputer size="10vmin" color="#3985a6" />
          <span>Computers</span>
          <p>View Details</p>
        </div>
        <div className="card arts">
          <PiFilesFill size="10vmin" color="#3985a6" />
          <span>See All</span>
          <p>View Details</p>
        </div>
      </div>
    </div>
  );
};

export default StudyDomain;
