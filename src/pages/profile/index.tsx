import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../app/auth";
import NueButton from "../../components/UI/NueButton";
import { API_LINK } from "../../config";
import styles from "./style.module.scss";

const Profile = () => {
  const { value, setValue } = useContext(AuthContext);
  const navigate = useNavigate();
  if (value.user === null) {
    navigate("/");
  }
  console.log(value);
  const [name, setName] = useState(value.user.username);
  const [dob, setDob] = useState(value.user.DOB);
  const [description, setDescription] = useState(value.user.Description);
  const [email, setEmail] = useState(value.user.email);
  const [contact, setContact] = useState(value.user.Contact);
  const [skill, setSkill] = useState(value.user.Skills);

  const onSubmit = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("samagati_jwt")}`,
      },
    };

    try {
      await axios.put(
        `${API_LINK}/api/users/${value.user.id}`,
        {
          Contact: contact,
          Credit: value.user.Credit,
          DOB: dob,
          Description: description,
          Skills: skill,
          email: email,
          username: name,
        },
        config
      );

      setValue({
        user: {
          ...value.user,
          Contact: contact,
          DOB: dob,
          Description: description,
          Skills: skill,
          email: email,
          username: name,
        },
      });

      Swal.fire({
        title: "Profile data saved",
        text: "Your profile is completed",
        icon: "success",
        confirmButtonText: "Done",
      });
      navigate("/userProfile");
    } catch (e) {
      console.log(e);
      return;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <span className={styles.picture}></span>
        <form className={styles.formContainer}>
          <input
            value={name}
            type="text"
            name="profile"
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            value={dob}
            type="date"
            name="dob"
            placeholder="Date of birth"
            onChange={(e) => {
              setDob(e.target.value);
            }}
          />
          <input
            value={description}
            type="text"
            placeholder="How would you describe yourself"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <input
            value={contact}
            type="tel"
            name="contact"
            placeholder="Contact"
            onChange={(e) => {
              setContact(e.target.value);
            }}
          />
          <input
            value={email}
            type="email"
            name="email"
            placeholder="Email "
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            value={skill}
            type="text"
            placeholder="Skills and Hobbies"
            onChange={(e) => {
              setSkill(e.target.value);
            }}
          />
          <NueButton name="Submit" key={""} onClick={onSubmit} />
        </form>
      </div>
    </div>
  );
};

export default Profile;
