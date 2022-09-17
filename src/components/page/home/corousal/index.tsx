import React from 'react';
import Slider from 'react-slick';

import styles from './styles.module.scss';
import { Carousel } from 'react-responsive-carousel';

const Item: React.FC<any> = () => {
    return (
        <div className={styles.itemContainer}>
            <div className={styles.item}>
                <img src='./image/pexels.jpg' alt='' />
                <div>
                    <p>
                        <mark>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that
                        </mark>
                    </p>
                </div>
            </div>
        </div>
    );
};

const Corousal: React.FC<any> = () => {
    const settings = {
        className: 'center',
        centerMode: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };
    return (
        // <div className={styles.container}>
        //     <Slider {...settings}>
        //         <Item />
        //         <Item />
        //         <Item />
        //         <Item />
        //         <Item />
        //         <Item />
        //     </Slider>
        // </div>
        <div className={styles.container}>
            <Carousel {...settings}>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </Carousel>
        </div>
    );
};

export default Corousal;
