import React from 'react';
import styles from './nuebuttondark.module.css';

type props = {
    name: string;
    onClick?: any;
};

const NueButtonDark: React.FC<props> = ({ name, onClick }: props) => {
    return (
        <div
            className={styles.container}
            onClick={() => {
                onClick();
            }}
        >
            {name}
        </div>
    );
};

export default NueButtonDark;
