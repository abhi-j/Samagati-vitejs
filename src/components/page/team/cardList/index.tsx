import React, { useState, useEffect } from "react";
import TeamMemberImage from "../teammemberimage";
import styles from "./styles.module.scss";
import Slider from "react-slick";
import { API_TOKEN } from "../../../../config";
import axios from "axios";

import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";

const members = [
  {
    name: "Dhruv Champaneri",
    image: "./image/Avatar1.jpg",
    bio: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Sapiente, in non quo deleniti aut tempora cupiditate labore itaque.`,
    role: "Founder",
  },
];

const Corousal: React.FC<any> = () => {
  const [memberIndex, setMemberIndex] = useState(0);

  const width = useWindowWidth();
  const height = useWindowHeight();

  let slidesToShow = 5;
  let slidesToScroll = 5;
  if (width > 1200) {
    slidesToShow = 5;
    slidesToScroll = 5;
  } else if (width > 1000) {
    slidesToShow = 4;
    slidesToScroll = 4;
  } else if (width > 800) {
    slidesToShow = 3;
    slidesToScroll = 3;
  } else if (width > 600) {
    slidesToShow = 2;
    slidesToScroll = 2;
  } else {
    slidesToShow = 1;
    slidesToScroll = 1;
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow,
    slidesToScroll,
    arrows: true,
    className: "center",
    rows: 2,
  };

  const [carousel, setCarousel] = useState<any>({});

  useEffect(() => {
    async function getdata() {
      const config = {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
      };
      const res = await axios.get(
        "http://localhost:1337/api/teams?populate=*",
        config
      );
      const teams = res.data;
      setCarousel(teams);
    }
    getdata();
  }, []);

  console.log(carousel);
  console.log();

  return (
    <div>
      <Slider {...settings} className={styles.sliderContainer}>
        <div>
          <TeamMemberImage {...members[memberIndex]} />
        </div>
        <div>
          <TeamMemberImage {...members[memberIndex]} />
        </div>
        <div>
          <TeamMemberImage {...members[memberIndex]} />
        </div>
        <div>
          <TeamMemberImage {...members[memberIndex]} />
        </div>
        <div>
          <TeamMemberImage {...members[memberIndex]} />
        </div>
        <div>
          <TeamMemberImage {...members[memberIndex]} />
        </div>
        <div>
          <TeamMemberImage {...members[memberIndex]} />
        </div>
        <div>
          <TeamMemberImage {...members[memberIndex]} />
        </div>
        <div>
          <TeamMemberImage {...members[memberIndex]} />
        </div>
        <div>
          <TeamMemberImage {...members[memberIndex]} />
        </div>
        <div>
          <TeamMemberImage {...members[memberIndex]} />
        </div>
        <div>
          <TeamMemberImage {...members[memberIndex]} />
        </div>
        <div>
          <TeamMemberImage {...members[memberIndex]} />
        </div>
        <div>
          <TeamMemberImage {...members[memberIndex]} />
        </div>
        <div>
          <TeamMemberImage {...members[memberIndex]} />
        </div>
        <div>
          <TeamMemberImage {...members[memberIndex]} />
        </div>
        <div>
          <TeamMemberImage {...members[memberIndex]} />
        </div>
        <div>
          <TeamMemberImage {...members[memberIndex]} />
        </div>
        <div>
          <TeamMemberImage {...members[memberIndex]} />
        </div>
        <div>
          <TeamMemberImage {...members[memberIndex]} />
        </div>
      </Slider>
    </div>
  );
};

const CardList = () => {
  return (
    <div
      className={
        styles.members +
        " top-margin-high  high-padding high-corner medium-shadow"
      }
    >
      <Corousal />
    </div>
  );
};

export default CardList;
