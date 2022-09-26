import { useContext, useEffect } from "react";
import { AiFillLinkedin, AiFillMail, AiOutlineInstagram } from "react-icons/ai";
import styles from "./styles.module.scss";
import { AuthContext } from "../../../../../app/auth";
import { Link, useNavigate } from "react-router-dom";
const index = () => {
  const { value, setValue } = useContext(AuthContext);

  const navigate = useNavigate();
  if (value.user === null) {
    navigate("/");
  }

  console.log(value);
  return (
    <div className={styles.container}>
      <div>
        <h1>{value.user.username}</h1>
        {/* <p
          style={{
            color: "#747474",
          }}
        >
          Founder
        </p> */}
      </div>
      <div className={styles.infoContainer}>
        <div>
          <div>
            <h3>Skills</h3>
            <p>
              {value.user.Skills ? value.user.Skills : "Enter your skills here"}
            </p>
          </div>
          <div>
            <h3>DOB</h3>
            <p>{value.user.DOB ? value.user.DOB : "Enter your DOB here"}</p>
          </div>
          <div className={styles.profile}>
            <Link to="/editProfile">Edit Profile</Link>
          </div>
        </div>
        <div>
          {/* <div>
            <h3>Connect with me</h3>
            <div
              style={{
                display: "flex",
                gap: 12,
                fontSize: 24,
                color: "#173b82",
              }}
            >
              <AiOutlineInstagram />
              <AiFillLinkedin />
              <AiFillMail />
            </div>
          </div> */}
          <div>
            <h3>Milestones</h3>
            <p>
              {value.user.Description
                ? value.user.Description
                : "No milestones"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
