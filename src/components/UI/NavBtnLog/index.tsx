import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

const NavBtnLog: React.FC<any> = (Props: any) => {
  const handleClick = () => {
    Props.handleClick();
  };
  console.log("import");
  return (
    <div className={styles.container} onClick={handleClick}>
      <Props.Icon className={styles.navBtnIcon} />
      <span className={styles.navBtnText}>{Props.Label}</span>
    </div>
  );
};

export default NavBtnLog;
