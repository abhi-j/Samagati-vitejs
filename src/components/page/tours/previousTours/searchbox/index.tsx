import React from 'react';
import styles from './styles.module.scss';

const SearchBox = () => {
    return (
        <div className={styles.container}>
            <input type='text' placeholder='Search voyage & events..' />
        </div>
    );
};

export default SearchBox;
