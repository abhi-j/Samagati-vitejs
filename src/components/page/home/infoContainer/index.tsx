import React from "react";
import { useNavigate } from "react-router-dom";
import NueButton from "../../../UI/NueButton";
import styles from "./styles.module.scss";
const InfoContainer = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h1>Samagati...</h1>
      <p>
        A community having fun with education and travelling Lorem ipsum, dolor
        sit amet consectetur adipisicing elit. Assumenda error cum sunt qui quod
        odio et quos veniam quo consectetur vel sapiente, reiciendis, alias
        possimus, eveniet esse ipsum! Deleniti obcaecati recusandae consectetur
        earum omnis blanditiis enim corrupti dolor perspiciatis, veritatis,
        aliquid incidunt commodi aut, sapiente dignissimos aliquam perferendis
        deserunt cupiditate.{" "}
      </p>
      <NueButton
        name="Explore"
        onClick={() => {
          navigate("/tours");
        }}
      />
    </div>
  );
};

export default InfoContainer;
