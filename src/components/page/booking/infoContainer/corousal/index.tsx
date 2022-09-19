import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { API_LINK } from "../../../../../config";

import styles from "./styles.module.scss";

const Item: React.FC<any> = ({ image }) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.item}>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

const Corousal: React.FC<any> = () => {
  const data = JSON.parse(localStorage.getItem("selected") as string);
  console.log(data.attributes.Carousel);

  const settings = {
    className: "center",
    centerMode: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // speed: 5000,
    // autoplaySpeed: 5000,
    // cssEase: 'linear',
  };
  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {data.attributes.Carousel.data.map((item) => {
          console.log(item.attributes.formats.medium.url);
          return (
            <Item
              image={`${API_LINK}${item.attributes.formats.medium.url}`}
            ></Item>
          );
        })}
      </Slider>
    </div>
  );
};

export default Corousal;
