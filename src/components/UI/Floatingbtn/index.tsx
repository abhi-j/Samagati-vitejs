import React from 'react';
import styles from './floatingbtn.module.css';
import { AiOutlineWhatsApp } from 'react-icons/ai';

const FloatingBtn = () => {
    return (
        <div className={styles.container}>
            <AiOutlineWhatsApp className={styles.icon} />
            <span className={styles.text}>Chat on whatsapp</span>
        </div>
    );
};

export default FloatingBtn;
