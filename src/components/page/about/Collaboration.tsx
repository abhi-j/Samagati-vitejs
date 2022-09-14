import React from "react";
import styles from "./Collaboration.module.css";

type props = {
  image: any;
};

const Collaborations: React.FC<props> = (Props: props) => {
  return (
    <div className={styles.imagesContainer}>
      <img
        src={Props.image}
        alt="Picture of the author"
        width={120}
        height={120}
      />
    </div>
  );
};

export default Collaborations;
