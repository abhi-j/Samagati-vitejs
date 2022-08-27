import React from 'react';
import styles from './Input.module.css';
type props = {
    placeholder: string;
    onChange?: any;
    type: string;
};

const Input: React.FC<props> = ({ type, placeholder, onChange }: props) => {
    return (
        <input
            type={type}
            className={styles.EmailInput}
            placeholder={placeholder}
            onChange={(a) => {
                onChange && onChange(a.target.value);
            }}
            required
        ></input>
    );
};

export default Input;
