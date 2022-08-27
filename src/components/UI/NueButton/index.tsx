import React from 'react';
import styles from './nuebutton.module.css';

type props = {
    name: string;
    onClick?: any;
};

const NueButton: React.FC<props> = ({ name, onClick }: props) => {
    return (
        <div className={styles.container} onClick={onClick}>
            {name}
        </div>
    );
};

export default NueButton;
