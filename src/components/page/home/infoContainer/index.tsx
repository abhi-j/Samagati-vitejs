import React from "react";
import { useNavigate } from "react-router-dom";
import NueButton from "../../../UI/NueButton";
import styles from "./styles.module.scss";
import Fade from "react-reveal/Fade";

const InfoContainer = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <Fade up>
        <h1>Let's Learn with Samagati...</h1>
        <p>
          We aim to unveil the vast horizon of knowledge that arises from a
          hands-on learning experience. By organising national and international
          voyages and workshops and getting students connected with mentors
          around the globe, we provide them with choices regarding their
          education.
        </p>
      </Fade>
    </div>
  );
};

export default InfoContainer;
