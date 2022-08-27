import React from 'react';
import styles from './socialmedia.module.css';

type props = {
    icon: any;
};

const SocialMediaBtn: React.FC<props> = (Props: props) => {
    return (
        <div className={styles.container}>
            <Props.icon />
        </div>
    );
};

export default SocialMediaBtn;
