import React from 'react';
import styles from './floatingbtn.module.css';
import { AiOutlineWhatsApp } from 'react-icons/ai';

const FloatingBtn = () => {
    return (
        <a href='https://wa.me/918805388985' className={styles.container}>
            <AiOutlineWhatsApp className={styles.icon} />
            <span className={styles.text}>Chat on whatsapp</span>
        </a>
    );
};

export default FloatingBtn;
