import React from 'react';
import styles from './styles.module.scss';

type props = {
    placeholder: string;
    onChange: (value: string) => void;
    type: string;
};

const Input: React.FC<props> = ({ type, placeholder, onChange }: props) => {
    return (
        <input
            type={type}
            className={styles.container}
            placeholder={placeholder}
            onChange={(e) => {
                onChange(e.target.value);
            }}
            required
        ></input>
    );
};

export default Input;
