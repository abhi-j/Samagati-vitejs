import React from 'react';
import { API_LINK } from '../../../../../config';
import styles from './styles.module.scss';

const index = ({ item }) => {
    console.log(item);
    return (
        <div className={styles.container}>
            <img src={`${item.tourData.image.url}`} alt='' />
            <div>
                <h3>{item.tourData.Name}</h3>
                <p>{item.tourData.description}</p>
            </div>
        </div>
    );
};

export default index;
