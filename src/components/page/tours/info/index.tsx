import React from 'react';
import styles from './styles.module.scss';

type props = {
    title: string;
    text: string;
};

const Info: React.FC<props> = ({ title, text }) => {
    return (
        <div className={styles.container}>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    );
};

export default Info;
