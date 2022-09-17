import React from "react";
import Info from "../../components/page/tours/info";
import SocialMediaBtn from "../../components/UI/SocialMediaBtn";
import styles from "./styles.module.scss";
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import UserInfo from "../../components/page/userProfile/userInfo";

// const UserProfile = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.profile}>
//         <div>
//           <Info title={"Dhruv Champaneri"} text={"Founder"} />
//         </div>
//         <div className={styles.left1}>
//           <div className={styles.bio}>
//             <h3>Bio</h3>
//             <p>
//               It is a long established fact that a reader will be distracted by
//               the readable content of a page when
//             </p>
//           </div>
//           <div className={styles.connect}>
//             <h3>Connect with me</h3>
//             <div className={styles.socialIcons}>
//               <SocialMediaBtn icon={AiOutlineInstagram} />
//               <SocialMediaBtn icon={AiFillLinkedin} />
//               <SocialMediaBtn icon={AiOutlineMail} />
//               <SocialMediaBtn icon={FiTwitter} />
//             </div>
//           </div>
//         </div>
//         <div className={styles.right}>
//           <img src="/src/assets/image/b.jpg" alt=""></img>
//         </div>
//         <div className={styles.left1}>
//           <div className={styles.dob}>
//             <div className={styles.bio}>
//               <h3>DOB</h3>
//               <p>Aug 31 2001</p>
//             </div>
//             <div className={styles.bio}>
//               <h3>Education</h3>
//               <p>Communication Design</p>
//             </div>
//           </div>
//           <div className={styles.right1}>
//             <h3>Milestone</h3>
//             <p>
//               It is a long established fact that a reader will be distracted by
//               the readable content of a page when
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className={styles.bookings}></div>
//     </div>
//   );
// };

const UserProfile = () => {
  return (
    <>
      <UserInfo />
    </>
  );
};

export default UserProfile;
