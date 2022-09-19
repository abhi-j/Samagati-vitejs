import {
  AiOutlineHome,
  AiOutlineInfo,
  AiOutlinePhone,
  AiOutlineCompass,
} from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { RiLoginBoxLine, RiTeamLine } from "react-icons/ri";

import NavBtn from "../../UI/NavBtn";
import NavBtnLog from "../../UI/NavBtnLog";

import styles from "./styles.module.scss";

import Logo from "../../../assets/image/Logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../app/auth";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { value, setValue } = useContext(AuthContext);
  return (
    <div className={styles.container}>
      <Link to="/">
        <img src={Logo} width={186} height={43} alt="Samagati" />
      </Link>
      <ul className={styles.NavList}>
        <li>
          <NavBtn Icon={AiOutlineHome} Label="Home" page_link="/" />
        </li>
        <li>
          <NavBtn Icon={AiOutlineInfo} Label="About" page_link="/about" />
        </li>
        <li>
          <NavBtn Icon={RiTeamLine} Label="Team" page_link="/team" />
        </li>
        <li>
          <NavBtn Icon={AiOutlineCompass} Label="Tours" page_link="/tours" />
        </li>
        <li>
          <NavBtn Icon={AiOutlinePhone} Label="Phone" page_link="/contact" />
        </li>
        <li style={{ marginLeft: "4rem" }}>
          <NavBtn
            Icon={BsPersonCircle}
            Label="Profile"
            page_link="/userProfile"
          />
        </li>
        <li>
          {value.user !== null ? (
            <NavBtnLog
              handleClick={() => {
                setValue({ user: null });
                localStorage.removeItem("samagati_jwt");
                localStorage.removeItem("samagati_user");
              }}
              Icon={RiLoginBoxLine}
              Label="Logout"
            />
          ) : (
            <NavBtn Icon={RiLoginBoxLine} Label="Login" page_link="/login" />
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
