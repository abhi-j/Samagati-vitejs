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
import axios from "axios";
import Swal from "sweetalert2";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://samagati-email.herokuapp.com/sendme", {
        name,
        email,
        phone: contact,
        msg: message,
      });
      Swal.fire({
        title: "form submitted",
        text: "Your query has been submitted",
        icon: "success",
        confirmButtonText: "Okay",
        // confirmButtonColor: "#173b82",
      });

      setName("");
      setEmail("");
      setContact("");
      setMessage("");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div>
            <h1>Start talking!</h1>
            <h3>Ask your questions</h3>
          </div>
          <form>
            <Input
              id="name"
              placeholder="Enter your full name"
              onChange={setName}
              type="username"
              value={name}
            />

            <Input
              id="email"
              placeholder="Enter your email address"
              onChange={setEmail}
              type="email"
              value={email}
            />
            <Input
              id="contact"
              placeholder="Enter your contact number"
              onChange={setContact}
              type="tel"
              value={contact}
            />
            <TextAreaBox
              placeholder="Enter question here..."
              onChange={setMessage}
              value={message}
            />
          </form>
          <NueButton name="Send" onClick={sendEmail} />
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
            <a href="https://">
              <SocialMediaBtn icon={AiOutlineInstagram} />
            </a>
            <a href="https://">
              <SocialMediaBtn icon={AiFillLinkedin} />
            </a>
            <a href="https://">
              <SocialMediaBtn icon={AiOutlineMail} />
            </a>
          </div>
        </div>
      </div>
      <FloatingBtn />
      <Footer />
    </div>
  );
};

export default Contact;
