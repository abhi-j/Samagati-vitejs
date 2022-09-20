import React from 'react';
import styles from './textarea.module.css';

type props = {
    placeholder: string;
    onChange: any;
    value?: string;
};

const TextAreaBox: React.FC<props> = ({
    placeholder,
    onChange,
    value,
}: props) => {
    return (
        <textarea
            className={styles.textareabox}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            value={value}
        ></textarea>
    );
};

export default TextAreaBox;
