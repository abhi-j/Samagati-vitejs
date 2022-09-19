import React, { useEffect } from "react";
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
import BookingContainer from "../../components/page/userProfile/bookingContainer";

const UserProfile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <UserInfo />
      <BookingContainer />
    </>
  );
};

export default UserProfile;
