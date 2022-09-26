import React, { useState, useEffect } from 'react';
import TeamMemberImage from '../teammemberimage';
import styles from './styles.module.scss';
import Slider from 'react-slick';
import { API_TOKEN, API_LINK } from '../../../../config';
import axios from 'axios';
import {
    useWindowSize,
    useWindowWidth,
    useWindowHeight,
} from '@react-hook/window-size';

const Corousal: React.FC<any> = () => {
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
        className: 'center',
        rows: 2,
    };

    const [carousel, setCarousel] = useState<any>([]);

    useEffect(() => {
        async function getdata() {
            // const config = {
            //   headers: {
            //     Authorization: `Bearer ${API_TOKEN}`,
            //   },
            // };
            const res = await axios.get(`${API_LINK}/api/teams?populate=*`);
            const teams = res.data;
            setCarousel(teams.data);
        }
        getdata();
    }, []);

    console.log(carousel);

    return (
        <div>
            <Slider {...settings} className={styles.sliderContainer}>
                {carousel.map((item) => {
                    return (
                        <div>
                            <TeamMemberImage
                                linkedIn={item.attributes.LinkedIn}
                                name={item.attributes.Name}
                                image={`${item.attributes.Image.data.attributes.formats.small.url}`}
                                role={item.attributes.Role}
                            />
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

const CardList = () => {
    return (
        <div
            className={
                styles.members +
                ' top-margin-high  high-padding high-corner medium-shadow'
            }
        >
            <Corousal />
        </div>
    );
};

export default CardList;
