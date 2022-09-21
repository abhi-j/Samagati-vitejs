import styles from './styles.module.scss';
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
const Item: React.FC<any> = ({ image }) => {
    return (
        <div className={styles.itemContainer}>
            <div className={styles.item}>
                <img src={image} />
                <div></div>
            </div>
        </div>
    );
};

const Corousal: React.FC<any> = () => {
    const settings = {
        className: 'center',
        centerMode: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        centerPadding: '20%',
    };
    return (
        <div className={styles.container}>
            <Slider {...settings}>
                <Item image={'./image/img1.jpg'} />
                <Item image={'./image/img2.jpg'} />
                <Item image={'./image/img3.jpg'} />
                <Item image={'./image/img4.jpg'} />
            </Slider>
        </div>
    );
};

export default Corousal;
