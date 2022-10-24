import React, { useEffect, useState } from 'react';
import { API_TOKEN, API_LINK } from '../../../../config';
import axios from 'axios';
import styles from './styles.module.scss';
import { Carousel as RCarousal } from 'react-responsive-carousel';
import Slider from 'react-slick';
import Fade from 'react-reveal/Fade';
import { useWindowWidth } from '@react-hook/window-size';

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
    const width = useWindowWidth();
    let centerPadding = '20%';

    if (width > 600) {
        centerPadding = '20%';
    } else {
        centerPadding = '10%';
    }

    useEffect(() => {
        async function getdata() {
            const res = await axios.get(`${API_LINK}/api/carousels?populate=*`);
            const images = res.data;
            setCarousel(images.data);
        }
        getdata();
    }, []);

    console.log(carousel);

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
        centerPadding,
    };

    return (
        <Fade up>
            <div className={styles.container}>
                <Slider {...settings}>
                    {carousel.map((item) => {
                        return (
                            <Item
                                image={`${item.attributes.Image.data.attributes.url}`}
                                text={item.attributes.Location}
                            ></Item>
                        );
                    })}
                </Slider>
            </div>
        </Fade>
    );
};

export default Corousal;
