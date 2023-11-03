
import styles from "../../styles/MobileMenuContent.module.css"; // Create a CSS module for styling

import React from 'react'

function RightNavbar() {
  return (
    <div className={styles.menuContent}>
      {" "}
      <ul>
         <li>Menu Item 1</li>
         <li>Menu Item 2</li>
         <li>Menu Item 3</li>
         {/* Add more menu items as needed */}
        {" "}
      </ul>
      {" "}
    </div>
  );
}

export default RightNavbar

