import React from "react";
import styles from "./Input.module.css";
type props = {
  placeholder: string;
  onChange?: any;
  type: string;
  id: string;
  value?: string;
};

const Input: React.FC<props> = ({
  id,
  type,
  placeholder,
  onChange,
  value,
}: props) => {
  return (
    <input
      id={id}
      type={type}
      className={styles.EmailInput}
      placeholder={placeholder}
      value={value}
      onChange={(a) => {
        onChange && onChange(a.target.value);
      }}
      required
    ></input>
  );
};

export default Input;
