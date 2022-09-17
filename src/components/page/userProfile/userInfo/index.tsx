import React from "react";
import styles from "./styles.module.scss";
import Info from "./info";
import ImageContainer from "./imageContainer";

const index = () => {
  return (
    <div className={styles.container}>
      <Info />
      <ImageContainer />
    </div>
  );
};

export default index;
