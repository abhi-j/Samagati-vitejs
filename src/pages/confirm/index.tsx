import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import { API_LINK } from "../../config";

const Success = () => {
  const [paymentData, setPaymentData] = useState(null);
  const location = useLocation();
  const session_id = location.search.replace("?session_id=", "");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const checkPayment = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("samagati_jwt")}`,
          },
        };

        const res = await axios.post(
          `${API_LINK}/api/booking/confirm`,
          {
            checkout_session: session_id,
          },
          config
        );
        setPaymentData(res.data);
        console.log(res.data);
      } catch (e) {
        console.log(e);
        navigate("/");
      }
    };
    checkPayment();
  }, []);

  if (paymentData === null) {
    return (
      <div
        style={{
          width: "100vw",
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Oval
          height={80}
          width={80}
          color="#bd3333"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#bd333391"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <h1>Your Order is confirmed</h1>
    </div>
  );
};

export default Success;
