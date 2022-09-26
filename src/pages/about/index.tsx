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
            "We provide various interrelated experiences that inculcate academics with adventure.\
            We are working towards revamping undergraduate education in the nation, with the vision to\
            adorn the system with experiential learning.\
            We are new-age education providers with an aim to help people understand the fast-paced\
            world by slowing them down and allowing them to experience learning amalgamated with\
            fun."
          }
        />

        <Info
          title={"Our Mission: Experimental learning through travel"}
          text={
            "Our mission is to build a globally reputed conglomerate of international events and global\
            travel voyages for a hands-on learning experience in the next 5 years."
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
