import Image from "next/image";
import React from "react";
import "../styles/globals.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import StudyDomain from "./components/StudyDomain";
// import Cards from "./components/Cards";

const Page = () => {
  return (
    <div>
      <Header />
      <Home />
      <StudyDomain />
      <Footer />
    </div>
  );
};

export default Page;
