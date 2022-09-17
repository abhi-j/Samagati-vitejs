import React from 'react';
import styles from './styles.module.scss';
import Card from './Card';

const index = () => {
    return (
        <div className={styles.container}>
            <h1>My booking</h1>

            <div className={styles.gridContainer}>
                <Card />
                <Card /> <Card /> <Card />
            </div>
        </div>
    );
};

export default index;
