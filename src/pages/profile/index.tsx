import styles from "./style.module.scss";

const Profile = () => {
  return (
    <div className={styles.container}>
      <div>
        <span className={styles.picture}></span>
        <form className={styles.formContainer}>
          <input type="text" name="profile" placeholder="Name" />
          <input type="date" name="dob" placeholder="Date of birth" />
          <input type="text" placeholder="How would you describe yourself" />
          <input type="tel" name="contact" placeholder="Contact" />
          <input type="email" name="email" placeholder="Email " />
          <input type="text" placeholder="Skills and Hobbies" />
        </form>
      </div>
    </div>
  );
};

export default Profile;
