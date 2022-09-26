import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../../app/auth";
import styles from "./styles.module.scss";
const index = () => {
  const { value, setValue } = useContext(AuthContext);

  if (!value.user.Image) {
    return (
      <div>
        <Link to="/editProfile">
          <img src="/image/Profile.png" alt="" />
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Link to="/editProfile">
        <img src="./image/Avatar1.jpg" alt="" />
      </Link>
    </div>
  );
};

export default index;
