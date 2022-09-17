import TextAreaBox from "../../components/UI/TextAreaBox";
import styles from "./style.module.scss";

const Profile = () => {
  return (
    <div className={styles.container}>
      Profile
      <div>
        <form className={styles.formContainer}>
          <input type="text" name="profile" placeholder="Name" />
          <input type="date" name="profile" placeholder="Date of birth" />
          <TextAreaBox
            placeholder="How would you describe yourself"
            onChange={{}}
          />
          <input type="text" name="profile" placeholder="Education" />
          <input type="text" name="profile" placeholder="Contact" />
          <input type="text" name="profile" placeholder="Email " />
          <TextAreaBox placeholder="Skills and Hobbies" onChange={{}} />
        </form>
      </div>
    </div>
  );
};

export default Profile;
