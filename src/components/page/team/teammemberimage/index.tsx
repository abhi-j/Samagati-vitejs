/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './styles.module.scss';

type props = {
    image: string;
    name: string;
    role: string;
    bio: string;
};

const TeamMemberImage: React.FC<props> = (Props: props) => {
    return (
        <div className={styles.container}>
            <img src={Props.image} alt={Props.name} />
            <div>
                <h1>{Props.name}</h1>
                <h2>{Props.role}</h2>
            </div>
        </div>
    );
};

export default TeamMemberImage;
