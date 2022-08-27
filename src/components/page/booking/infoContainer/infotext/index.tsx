import React from 'react';
import styles from './styles.module.scss';

type props = {
    heading: string;
    paragraph: string;
};

const InfoText: React.FC<props> = ({ heading, paragraph }) => {
    return (
        <div className={styles.container}>
            <h1>{heading}</h1>
            <p>{paragraph}</p>
        </div>
    );
};

export default InfoText;
