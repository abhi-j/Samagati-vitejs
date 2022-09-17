import React, { useEffect, useState } from "react";
import { API_TOKEN } from "../../../../config";
import axios from "axios";
import Slider from "react-slick";
import styles from "./styles.module.scss";
import { BsImages } from "react-icons/bs";

import styles from './styles.module.scss';
import { Carousel } from 'react-responsive-carousel';

const Item: React.FC<any> = ({ image, text }) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.item}>
        <img src={image} alt={text} />
        <div>
          <p>
            <mark>{text}</mark>
          </p>
        </div>
      </div>
    </div>
  );
};

const Corousal: React.FC<any> = () => {

  const [carousel, setCarousel] = useState<any>([]);

  useEffect(() => {
    async function getdata() {
      const config = {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
      };
      const res = await axios.get(
        "http://localhost:1337/api/carousels?populate=*",
        config
      );
      const images = res.data;
      setCarousel(images.data);
    }
    getdata();
  }, []);

  console.log(carousel);

  const settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {carousel.map((item) => {
          return (
            <Item
              image={`http://localhost:1337${item.attributes.Image.data.attributes.formats.medium.url}`}
              text={item.attributes.Location}
            ></Item>
          );
        })}
      </Slider>
    </div>
  );
};

export default Corousal;
