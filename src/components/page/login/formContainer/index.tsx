import React, { useContext, useState } from "react";
// import { AiFillGoogleCircle } from "react-icons/ai";
// import { BsFacebook } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import Input from "../../../UI/Input";
import SocialMediaBtn from "../../../UI/SocialMediaBtn";
import styles from "./styles.module.scss";
import { AuthContext } from "../../../../app/auth";
import { signIn } from "../../../../services/auth";
import NueButton from "./btn";

const FormContainer = () => {
  const user = useContext(AuthContext);

  const navigate = useNavigate();

  console.log(user);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const data = await signIn({ ...values });
      user.setValue({
        user: data.user,
      });
      localStorage.setItem("samagati_jwt", data.jwt);
      localStorage.setItem("samagati_user", JSON.stringify(data.user));
      Swal.fire({
        title: "Login Success",
        text: "User login is successfull",
        icon: "success",
        confirmButtonText: "Cool",
      });
      navigate("/");
    } catch (err: any) {
      Swal.fire({
        title: "Error",
        text: err.response.data.error.message,
        icon: "error",
        confirmButtonText: "Cool",
        // confirmButtonColor: "#173b82",
      });
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <h1>Welcome To Samagati</h1>
        <h3>Login to your Samagati account</h3>
      </div>

      <form onSubmit={onSubmit}>
        <Input
          id="username"
          placeholder="Username"
          onChange={(value: any) => {
            setValues({ ...values, email: value });
          }}
          type="text"
        />
        <Input
          id="password"
          placeholder="Password"
          onChange={(value: any) => {
            setValues({ ...values, password: value });
          }}
          type="password"
        />
        <div>
          <NueButton />
          <h3>Forgot password?</h3>
        </div>
      </form>

      {/* <div>
        <h5 style={{ marginLeft: "4rem", color: "#173b82" }}>Or</h5>
        <div className={styles.iconContainer}>
          <SocialMediaBtn icon={AiFillGoogleCircle} />
          <SocialMediaBtn icon={BsFacebook} />
        </div>
      </div> */}

      <div className={styles.accountSpan}>
        <span>Dont have an account?</span>
        <span style={{ color: "#173b82" }}>
          <Link to="/register"> Create account</Link>
        </span>
      </div>
    </div>
  );
};

export default FormContainer;
