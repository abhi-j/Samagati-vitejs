import Slider from 'react-slick';
import React, { useEffect, useState } from 'react';
import { API_LINK } from '../../../../../config';
import styles from './styles.module.scss';
import axios from 'axios';
import PopupContainer from '../popupContainer';
import { Carousel as RCarousal } from 'react-responsive-carousel';
import { useWindowWidth } from '@react-hook/window-size';

const Item: React.FC<any> = ({
    name,
    image,
    description,
    video,
    testimonial,
}) => {
    const [show, setShow] = useState(false);
    return (
        <div
            style={{
                padding: '16px',
            }}
        >
            <div className={styles.itemContainer}>
                <div className={styles.item}>
                    <img src={image} alt='' />
                    <div></div>
                </div>
                <div className={styles.itemText}>
                    <h1>{name}</h1>
                    <p>{description}</p>
                    <br />
                    <a onClick={() => setShow((value) => !value)}>Learn more</a>
                </div>
                {show && (
                    <PopupContainer
                        setShow={setShow}
                        video={video}
                        description={description}
                        testimonial={testimonial}
                        name={name}
                    />
                )}
            </div>
        </div>
    );
};

const Corousal: React.FC<any> = () => {
    const [carousel, setCarousel] = useState<any>([]);
    const width = useWindowWidth();

    let slidesToShow = 2;
    let slidesToScroll = 1;

    if (width > 700) {
        slidesToShow = 2;
        slidesToScroll = 1;
    } else {
        slidesToShow = 1;
        slidesToScroll = 1;
    }

    useEffect(() => {
        async function getdata() {
            const res = await axios.get(
                `${API_LINK}/api/previous-tours?populate=*`
            );
            const images = res.data;
            setCarousel(images.data);
        }
        getdata();
    }, []);

    console.log(carousel);
    const settings = {
        className: 'center',
        // centerMode: true,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow,
        slidesToScroll,
        arrows: false,
    };

    return (
        <div className={styles.container}>
            <Slider {...settings}>
                {carousel.map((item) => {
                    return (
                        <Item
                            name={item.attributes.Name}
                            video={`${item.attributes?.Video?.data?.attributes?.url}`}
                            image={`${item.attributes.Images.data.attributes.formats.medium.url}`}
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
