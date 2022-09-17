import React, { useState } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import { signUp } from "../../../../services/auth";
import Input from "../../../UI/Input";
import NueButton from "../../../UI/NueButton";
import SocialMediaBtn from "../../../UI/SocialMediaBtn";
import styles from "./styles.module.scss";

const FormContainer = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    contact: "",
    username: "",
    confirmPassword: "",
  });

  const onSubmit = async () => {
    try {
      const data = await signUp({
        ...values,
      });
      console.log(data);
    } catch (e) {
      console.log(e);
      return;
    }

    // router.push('/login');
  };

  return (
    <div className={styles.container}>
      <h1>Hello, Welcome To Samagati</h1>
      <h3>Create your new profle</h3>

      <form action="">
        <Input
          id="username"
          placeholder="Username"
          onChange={(value: any) => setValues({ ...values, username: value })}
          type="text"
        />
        <Input
          id="email"
          placeholder="Email"
          type="email"
          onChange={(value: any) => setValues({ ...values, email: value })}
        />
        <Input
          id="contact"
          placeholder="Contact"
          onChange={(value: any) => setValues({ ...values, contact: value })}
          type="tel"
        />
        <Input
          id="password"
          placeholder="Password"
          onChange={(value: any) => setValues({ ...values, password: value })}
          type="password"
        />
        <Input
          id="cnfrmPassword"
          placeholder="Confirm Password"
          onChange={(value: any) =>
            setValues({ ...values, confirmPassword: value })
          }
          type="password"
        />
        <NueButton name="Create" onClick={onSubmit} />
      </form>

      <h5 style={{ marginLeft: "4rem", color: "#173b82" }}>Or</h5>
      <div className={styles.iconContainer}>
        <SocialMediaBtn icon={AiFillGoogleCircle} />
        <SocialMediaBtn icon={BsFacebook} />
      </div>
      <div className={styles.accountSpan}>
        <span>Already a member?</span>
        <span>
          <Link to="/login">
            <a> Sign in</a>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default FormContainer;
