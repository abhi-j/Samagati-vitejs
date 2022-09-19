import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import { API_LINK } from "../../../../../config";
import styles from "./styles.module.scss";
import axios from "axios";
import { Carousel as RCarousal } from "react-responsive-carousel";

const Item: React.FC<any> = ({ image, description, video, testimonial }) => {
  console.log(testimonial);
  return (
    <div className={styles.itemContainer}>
      <div className={styles.item}>
        <img src={image} alt="" />
        <div>
          <p>
            <mark>{description}</mark>
          </p>
        </div>
      </div>

      <div className={styles.item}>
        <video width="100%" height="100%" controls>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={styles.car}>
        <div className={styles.item}>
          {testimonial.map((item) => {
            return (
              <span>
                <h1>{item.name}</h1>
                <p>{item.comment}</p>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Corousal: React.FC<any> = () => {
  const [carousel, setCarousel] = useState<any>([]);
  useEffect(() => {
    async function getdata() {
      const res = await axios.get(`${API_LINK}/api/previous-tours?populate=*`);
      const images = res.data;
      setCarousel(images.data);
    }
    getdata();
  }, []);

  console.log(carousel);
  const settings = {
    className: "center",
    // centerMode: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {carousel.map((item) => {
          return (
            <Item
              video={`${API_LINK}${item.attributes.Video.data.attributes.url}`}
              image={`${API_LINK}${item.attributes.Images.data.attributes.formats.medium.url}`}
              description={item.attributes.Description}
              testimonial={item.attributes.Testimonial}
            ></Item>
          );
        })}
      </Slider>
    </div>
  );
};

export default Corousal;
