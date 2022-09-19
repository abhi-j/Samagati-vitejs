import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { useEffect, useState, useRef } from "react";
import Footer from "../footer";
import emailjs from "@emailjs/browser";
import TextAreaBox from "../../components/UI/TextAreaBox";
import NueButton from "../../components/UI/NueButton";
import FloatingBtn from "../../components/UI/Floatingbtn";
import Input from "../../components/UI/Input";
import styles from "./styles.module.scss";
import SocialMediaBtn from "../../components/UI/SocialMediaBtn";

const Contact = () => {
  const [question, setQuestion] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
    sent: false,
  });

  // const handleName = (e) => {
  //   this.setState({
  //     name: e.target.name,
  //   });
  // };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lxo5a49", //service_id
        "template_gzb47ct", //template_id
        form.current,
        "bKz2hnn_dkoVnBO23" //public_key
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div>
            <h1>Start talking!</h1>
            <h3>Ask your questions</h3>
          </div>
          {/* <form ref={form} onSubmit={sendEmail}> */}
          <Input
            id="name"
            placeholder="Enter your full name"
            onChange={setState.name}
            type="username"
            value={state.name}
          />

          <Input
            id="email"
            placeholder="Enter your email address"
            onChange={setEmail}
            type="email"
            value={state.email}
          />
          <Input
            id="contact"
            placeholder="Enter your contact number"
            onChange={setEmail}
            type="tel"
            value={state.contact}
          />
          <TextAreaBox
            placeholder="Enter question here..."
            onChange={setQuestion}
          />
          <NueButton name="Send" />
          {/* </form> */}
        </div>

        <div className={styles.right}>
          <h1>Samagati Office</h1>
          <p>
            Avantika University, Vishwanathpuram, Lekoda, Madhya Pradesh 456006
          </p>

          <h2>avantika.samagati@avantika.edu.in</h2>
          <p>9588043164, 8805388985, 6265987173</p>
          <div
            style={{
              boxShadow:
                "-9px -9px 16px #FAFBFF, 9px 9px 16px rgba(166, 171, 189, 0.4)",
              marginTop: "2rem",
              borderRadius: "10px",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.270366528668!2d75.71480651496901!3d23.087196584920324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39630a7c00000001%3A0x5afc74070aeb75bd!2sAvantika%20University%20-%20Top%20Design%20BDes%20MDes%20BTech%20MBA%20BBA%20Colleges%20Institutes%20in%20MP%20India!5e0!3m2!1sen!2sin!4v1661797102933!5m2!1sen!2sin"
              width="600"
              height="200"
              style={{
                boxShadow:
                  "inset -9px -9px 16px #FAFBFF, inset 5px 5px 16px rgba(166, 171, 189, 0.39)",
                borderRadius: "10px",
                border: "1px solid rgba(255, 255, 255, 0.4)",
                background:
                  " linear-gradient(135.37deg, rgba(0, 0, 0, 0.4) 4.29%, rgba(255, 255, 255, 0.4) 95.6%), #F4F4F4",
              }}
              loading="lazy"
            ></iframe>
          </div>

          <div className={styles.iconContainer}>
            <SocialMediaBtn icon={AiOutlineInstagram} />
            <SocialMediaBtn icon={AiFillLinkedin} />
            <SocialMediaBtn icon={AiOutlineMail} />
            <SocialMediaBtn icon={FiTwitter} />
          </div>
        </div>
      </div>
      <FloatingBtn />
      <Footer />
    </div>
  );
};

export default Contact;
