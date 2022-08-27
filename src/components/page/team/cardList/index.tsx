import React, { useState } from 'react';
import TeamMemberImage from '../teammemberimage';
import styles from './styles.module.scss';
import Slider from 'react-slick';
import {
    useWindowSize,
    useWindowWidth,
    useWindowHeight,
} from '@react-hook/window-size';

const members = [
    {
        name: 'Alex',
        image: './image/Avatar1.jpg',
        bio: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Sapiente, in non quo deleniti aut tempora cupiditate labore itaque.`,
        role: 'Adhyaksh',
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
        className: 'center',
        rows: 2,
    };
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
                ' top-margin-high  high-padding high-corner medium-shadow'
            }
        >
            <Corousal />
        </div>
    );
};

export default CardList;
