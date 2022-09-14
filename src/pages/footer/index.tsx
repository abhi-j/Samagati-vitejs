/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerLogo}>
        <img src="/src/assets/image/Logo.png" alt="Logo" />
      </div>
      <div>
        <div className={styles.heading}>
          <h4>Links</h4>
          <h4>Contact</h4>
        </div>
        <div className={styles.linkContainer}>
          <div className={styles.left}>
            <span>Home</span>
            <span>About us</span>
            <span>Teams</span>
            <span>Tours</span>
            <span>Bookings</span>
          </div>
          <div className={styles.right}>
            <span>9588043164, 8805388985, 6265987173</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
