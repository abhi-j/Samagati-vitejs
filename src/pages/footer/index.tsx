/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerLogo}>
        <Link to="/">
          <img src="/src/assets/image/Logo.png" alt="Logo" />
        </Link>
      </div>
      <div>
        <div className={styles.heading}>
          <h3>Links</h3>
          <h3>Contact</h3>
        </div>
        <div className={styles.linkContainer}>
          <div className={styles.left}>
            <Link to="/">
              <span>Home</span>
            </Link>
            <Link to="/about">
              <span>About us</span>
            </Link>
            <Link to="/team">
              <span>Teams</span>
            </Link>
            <Link to="tours">
              <span>Tours</span>
            </Link>
            <Link to="/contact">
              <span>Contact</span>
            </Link>
          </div>
          <div className={styles.right}>
            <span>9588043164 | 8805388985 | 6265987173</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
