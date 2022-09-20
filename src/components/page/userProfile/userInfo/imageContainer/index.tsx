import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../../app/auth';
import styles from './styles.module.scss';
const index = () => {
    const { value, setValue } = useContext(AuthContext);

    if (!value.user.Image) {
        return (
            <div>
                <h1>no image</h1>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <img src='./image/Avatar1.jpg' alt='' />
        </div>
    );
};

export default index;
