import React, { useContext } from "react";
import Input from "./inputBox";
import NueButton from "./btn";
import styles from "./styles.module.scss";
import { useState } from "react";
import TextArea from "./textArea";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../../app/auth";
import axios from "axios";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const __DEV__ =
  document.domain === "localhost" || document.domain === "127.0.0.1";

const FormContainer = () => {
  const { value } = useContext(AuthContext);
  const { tour } = useParams();
  const [values, setValues] = useState({
    name: "",
    email: "",
    contact: "",
    redeem: "",
    learnings: "",
  });

  const handleChange = (name: string, value: string) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (value.user === null) {
      alert("please login before booking");
      return;
    }

    displayRazorpay();
  };

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("samagati_jwt")}`,
      },
    };

    const { data } = await axios.post(
      "http://localhost:1337/api/booking/pretransaction",
      {
        tour: {
          id: tour,
        },
        user: {
          name: values.name,
          contact: values.contact,
          email: values.email,
          learning: values.learnings,
        },
      },
      config
    );

    console.log(data);

    const options = {
      key: __DEV__ ? "rzp_test_wJS0N4TKDfxnud" : "PRODUCTION_KEY",
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: "Donation",
      description: "Thank you for nothing. Please give us some money",
      image: "http://localhost:1337/logo.svg",
      handler: function (response) {
        console.log(response);
      },
      prefill: {
        name: values.name,
        email: values.email,
        phone_number: values.contact,
      },
    };

    // // const paymentObject = new window.Razorpay(options);
    // paymentObject.open();
  }

  return (
    <div className={styles.container}>
      <div>
        <h1>Book your spot on our next Voyage!</h1>
        <form onSubmit={onSubmit}>
          <Input
            placeholder="Enter your name"
            type="text"
            onChange={(value: string) => {
              handleChange("name", value);
            }}
          />

          <Input
            placeholder="Enter your email"
            type="email"
            onChange={(value: string) => {
              handleChange("email", value);
            }}
          />

          <Input
            placeholder="Enter your contact"
            type="text"
            onChange={(value: string) => {
              handleChange("contact", value);
            }}
          />

          <TextArea
            placeholder="Enter your expected learning from this tour"
            onChange={(value: string) => {
              handleChange("learnings", value);
            }}
          />

          <Input
            placeholder="Redeem your creadits"
            type="text"
            onChange={(value: string) => {
              handleChange("redeem", value);
            }}
          />

          <NueButton />
        </form>
      </div>
    </div>
  );
};

export default FormContainer;
