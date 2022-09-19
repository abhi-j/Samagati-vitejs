import React from "react";
import styles from "./styles.module.scss";
import Info from "./info";
import ImageContainer from "./imageContainer";
import { useContext } from "react";
import { AuthContext } from "../../../../app/auth";

const index = () => {
  const { value, setValue } = useContext(AuthContext);

  console.log(value);

  return (
    <div className={styles.container}>
      <Info />
      <ImageContainer />
    </div>
  );
};

export default index;
