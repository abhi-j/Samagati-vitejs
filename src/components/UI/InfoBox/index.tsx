import React from "react";
import styles from "./InfoBox.module.css";

type props = {
  children: any;
};

const InfoBox: React.FC<props> = ({ children }: props) => {
  return <div className={styles.infoBox}>{children}</div>;
};

export default InfoBox;
