import React from 'react';
import styles from './styles.module.scss';
const NueButton: React.FC<any> = ({ onClick }) => {
    return (
        <div className={styles.container} onClick={onClick}>
            Book!
        </div>
    );
};

export default NueButton;
