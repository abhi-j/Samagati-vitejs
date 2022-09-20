import React from 'react';
import styles from './Collaboration.module.css';

type props = {
    image: any;
};

const Collaborations: React.FC<props> = (Props: props) => {
    return (
        <div className={styles.imagesContainer}>
            <img src={Props.image} alt='collaboration images' />
        </div>
    );
};

export default Collaborations;
