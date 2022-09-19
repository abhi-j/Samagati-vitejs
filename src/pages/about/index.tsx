import styles from "./styles.module.scss";
import Info from "../../components/page/tours/info";
import Footer from "../footer";
import Collaborations from "../../components/page/about/Collaboration";
import Profile from "../profile";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.pageContainer}>
      <div
        style={{
          margin: "50px 100px",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <Info
          title={"Welcome to Samagati. What do we do?"}
          text={
            "We believe that redesigning the structure of\
             learning through travel is the need of the hour and\
              we are here to disrupt the taboo of taking GAP Days\
              /Week/Month and Year in India. "
          }
        />

        <Info
          title={"Our Mission: Experimental learning through travel"}
          text={
            "We believe that redesigning the structure of\
             learning through travel is the need of the hour and\
              we are here to disrupt the taboo of taking GAP Days\
              /Week/Month and Year in India. "
          }
        />
      </div>

      <div className={styles.container}>
        <div className={styles.leftContent}>
          <img src="/image/about1.jpg" alt="Picture of the author" />
        </div>
        <div className={styles.rightContent}>
          <img src="/image/about2.jpg" alt="Picture of the author" />
        </div>
      </div>

      <div
        style={{
          marginBottom: "10px",
          marginLeft: "100px",
        }}
      >
        <Info title={"Collaborations"} text={""} />
      </div>
      <div className={styles.imgContainer}>
        <Collaborations image={"/src/assets/image/c1.jpg"} />
        <Collaborations image={"/src/assets/image/c2.png"} />
        <Collaborations image={"/src/assets/image/c3.svg"} />
      </div>
      <div></div>
      <Footer />
    </div>
  );
};

export default About;
