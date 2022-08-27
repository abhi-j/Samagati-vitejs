import React from 'react';
import styles from './textarea.module.css';

type props = {
    placeholder: string;
    onChange: any;
};

const TextAreaBox: React.FC<props> = ({ placeholder, onChange }: props) => {
    return (
        <textarea
            className={styles.textareabox}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
        ></textarea>
    );
};

export default TextAreaBox;
