import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Info from './info';
import ImageContainer from './imageContainer';
import { useContext } from 'react';
import { AuthContext } from '../../../../app/auth';
import { getUserData } from '../../../../services/auth';
import { Oval } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

const index = () => {
    return (
        <div className={styles.container}>
            <Info />
            <ImageContainer />
        </div>
    );
};

export default index;
