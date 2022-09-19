import styles from "./styles.module.scss";

import ImageContainer from "../../components/page/register/imageContainer";
import FormContainer from "../../components/page/register/formContainer";
import { useEffect } from "react";

const Register = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.container}>
      <FormContainer />
      <ImageContainer />
    </div>
  );
};

export default Register;
