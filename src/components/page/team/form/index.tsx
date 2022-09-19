import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { API_LINK } from "../../../../config";
import Input from "../../../UI/Input";
import NueButtonDark from "../../../UI/NueButtonDark";
import styles from "./styles.module.scss";

const TeamForm = () => {
  const [form, setForm] = useState(false);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();
  const [department, setDepartment] = useState();

  const onSubmit = async () => {
    const res = await axios.post(`${API_LINK}/api/applications`, {
      data: {
        Name: name,
        Email: email,
        Contact: contact,
        Department: department,
      },
    });

    Swal.fire({
      title: "Submitted",
      text: "Your applications is submitted successfully",
      icon: "success",
      confirmButtonText: "Done",
    });
  };

  let heightStyle = form
    ? {
        minHeight: "100vh",
      }
    : {};
  return (
    <div
      className={styles.formContainer}
      style={{
        ...heightStyle,
      }}
    >
      <div className={styles.textContainer}>
        <h1>Join Samagati now!</h1>
        <p>
          Become a part of our community where we learn, explore, educate,
          travel and have lots of fun!
        </p>
      </div>
      {form ? (
        <form>
          <div>
            <Input
              id="name"
              placeholder="Enter your Name"
              type="email"
              onChange={setName}
            />
            <Input
              id="contact"
              placeholder="Enter your contact number"
              type="tel"
              onChange={setContact}
            />
            <Input
              id="email"
              placeholder="Enter your email address"
              type="email"
              onChange={setEmail}
            />
            <Input
              id="department"
              placeholder="Which department you want to work."
              type="text"
              onChange={setDepartment}
            />
            <NueButtonDark
              name="Join"
              onClick={() => {
                onSubmit();
                setForm(false);
              }}
            />
          </div>
        </form>
      ) : (
        <NueButtonDark
          name="Join"
          onClick={() => {
            setForm(true);
          }}
        />
      )}
    </div>
  );
};

export default TeamForm;
