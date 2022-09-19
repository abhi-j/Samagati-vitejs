/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./styles.module.scss";

type props = {
  image: string;
  name: string;
  role: string;
  linkedIn: string;
};

const TeamMemberImage: React.FC<props> = (Props: props) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.imageContainer}
        src={Props.image}
        alt={Props.name}
      />
      <div>
        <h1>{Props.name}</h1>
        <h2 style={{ color: "#808080" }}>{Props.role}</h2>
        <a href={Props.linkedIn}>
          <img
            src="/src/assets/image/linkedin.png"
            alt="example"
            style={{ height: 30, width: 30 }}
          />
        </a>
      </div>
    </div>
  );
};

export default TeamMemberImage;
