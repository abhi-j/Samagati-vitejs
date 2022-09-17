/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./styles.module.scss";

type props = {
  image: string;
  name: string;
  role: string;
};

const TeamMemberImage: React.FC<props> = (Props: props) => {
  return (
    <div className={styles.container}>
      <img src={Props.image} alt={Props.name} />
      <div>
        <h1>{Props.name}</h1>
        <h2 style={{ color: "#808080" }}>{Props.role}</h2>
        <a href="https://www.linkedin.com/in/dhruv-champaneri-65031a1a0/">
          <img
            src="/src/assets/image/linkedin.png"
            alt="example"
            style={{ height: 20, width: 30 }}
          />
        </a>
      </div>
    </div>
  );
};

// type props = {
//     data: any;

//   };

//   const TeamMemberImage: React.FC<props> = (Props: props) => {
//     return (
//       <div className={styles.container}>
//         <img src={Props.image} alt={Props.name} />
//         <div>
//           <h1>{Props.name}</h1>
//           <h2>{Props.role}</h2>
//         </div>
//       </div>
//     );
//   };

export default TeamMemberImage;
