import styles from "./styles.module.scss";
import Info from "../../components/page/tours/info";
import Footer from "../footer";
import Collaborations from "../../components/page/about/Collaboration";
import Profile from "../profile";

const About = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <Info
            title={"Welcome to Samagati. What do we do?"}
            text={
              "We believe that redesigning the structure of\
             learning through travel is the need of the hour and\
              we are here to disrupt the taboo of taking GAP Days\
              /Week/Month and Year in India. "
            }
          />
        </div>
        <div className={styles.rightContent}>
          <img src="/" alt="Picture of the author" width={1100} height={500} />
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.leftContent2}>
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
        <div className={styles.rightContent2}>
          <img
            src="/assets/travel5.jpg"
            alt="Picture of the author"
            width={550}
            height={500}
          />
          <img
            src="/assets/travel4.jpg"
            alt="Picture of the author"
            width={550}
            height={500}
          />
        </div>
      </div>
      <div>
        <Info title={"Collaborations"} text={""} />
      </div>
      <div className={styles.imgContainer}>
        <Collaborations image={"/assets/travel4.jpg"} />
        <Collaborations image={"/assets/travel4.jpg"} />
        <Collaborations image={"/assets/travel4.jpg"} />
        <Collaborations image={"/assets/travel4.jpg"} />
        <Collaborations image={"/assets/travel4.jpg"} />
      </div>
      <div></div>
      <Footer />
    </div>
  );
};

export default About;
