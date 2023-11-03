"use client"
// Togglebtn.tsx
import { RiMenuFoldLine } from "react-icons/ri";
import React, { useEffect, useState } from 'react';
import styles from '../../styles/MobileMenu.module.css';
import RightNavbar from "./RightNavbar";


const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
const toggleMenu = () => {
  setIsOpen(!isOpen);
  console.log("clicked");
};


 
  return (
    <div className={styles.mobileMenu}>
      <button className={styles.menuButton} onClick={toggleMenu}>
        <RiMenuFoldLine />
      </button>
      {isOpen && <div className={styles.menuContent}> <RightNavbar /></div>}
    </div>
  );
};

export default MobileMenu;
