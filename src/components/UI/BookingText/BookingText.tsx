import React from "react";
import styles from "./BookingText.module.css";

type props = {
  title: string;
  info: string;
};

const BookingText: React.FC<props> = ({ title, info }: props) => {
  return (
    <div className={styles.content}>
      <h3>{title}</h3>
      <h4>{info}</h4>
    </div>
  );
};

export default BookingText;
