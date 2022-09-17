import React from 'react';
import styles from './styles.module.scss';

const index = () => {
    return (
        <div className={styles.container}>
            <img src='./image/vacation.jpg' alt='' />
            <div>
                <h3>Mount Abu</h3>
                <p>
                    It is a long established fact that a reader will be
                    distracted by
                </p>
            </div>
        </div>
    );
};

export default index;
