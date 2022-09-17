import React, { useEffect, useState } from "react";
import { API_TOKEN } from "../../../../config";
import axios from "axios";

import styles from "./styles.module.scss";
import { Carousel as RCarousal } from "react-responsive-carousel";

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
      const res = await axios.get(
        "http://localhost:1337/api/carousels?populate=*"
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
      <RCarousal centerMode>
        {carousel.map((item) => {
          return (
            <Item
              image={`http://localhost:1337${item.attributes.Image.data.attributes.formats.medium.url}`}
              text={item.attributes.Location}
            ></Item>
          );
        })}
      </RCarousal>
    </div>
  );
};

export default Corousal;
