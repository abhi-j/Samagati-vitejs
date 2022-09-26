import React from "react";
import styles from "./styles.module.scss";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div className={styles.container}>
      <Fade left>
        <div>
          <section>
            <h1>Samagati</h1>
            <p>
              We as a community, synthesize fun with education and traveling.
            </p>
            <Link to="/about">
              <button className={styles.btn}>Explore</button>
            </Link>
          </section>
        </div>
      </Fade>
    </div>
  );
};

export default index;
