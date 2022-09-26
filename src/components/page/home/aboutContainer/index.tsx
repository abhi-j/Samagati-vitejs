import React from "react";
import styles from "./styles.module.scss";
import Fade from "react-reveal/Fade";

const index = () => {
  return (
    <div className={styles.container}>
      <Fade left>
        <section>
          <h1>What’s Our moto?</h1>
          <p>
            We, at Samagati, aspire to promote Gap Culture through Experiential
            Learning. We conduct a series of experiments to promote gap culture
            in the form of gap days, weeks, months, and years. In the near
            future, we plan to instil this ideology around the nation and
            subsequently throughout the globe.
          </p>
        </section>
      </Fade>
      <Fade right>
        <div></div>
      </Fade>
    </div>
  );
};

export default index;
