import React from "react";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";

import bg_home from "../../../public/imgs/bg-home.webp";
import "../../styles/home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <h1>
          Search for Top College Admission, Fees, Courses, Exams <br />
          Reviews from 15,000+ Colleges in India
        </h1>
        <div className="search-container">
          <div className="btns">
            <button>Colleges</button>
            <button>Cources</button>
            <button>Exams</button>
          </div>
          <div className="search">
            <input type="search" placeholder="Search College Name" />
            <button>
              <FiSearch size="40px" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
