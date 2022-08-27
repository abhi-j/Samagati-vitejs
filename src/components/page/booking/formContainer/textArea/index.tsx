import React from 'react';
import styles from './styles.module.scss';

type props = {
    placeholder: string;
    onChange: (value: string) => void;
};

const TextArea: React.FC<props> = ({ placeholder, onChange }: props) => {
    return (
        <textarea
            className={styles.container}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            required
        ></textarea>
    );
};

export default TextArea;
