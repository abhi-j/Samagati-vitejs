import React from 'react';
import NueButton from '../../../UI/NueButton';
import styles from './styles.module.scss';
const InfoContainer = () => {
    return (
        <div className={styles.container}>
            <h1>Samagati...</h1>
            <p>
                A community having fun with education and travelling Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
                error cum sunt qui quod odio et quos veniam quo consectetur vel
                sapiente, reiciendis, alias possimus, eveniet esse ipsum!
                Deleniti obcaecati recusandae consectetur earum omnis blanditiis
                enim corrupti dolor perspiciatis, veritatis, aliquid incidunt
                commodi aut, sapiente dignissimos aliquam perferendis deserunt
                cupiditate.{' '}
            </p>
            <NueButton name='Explore' />
        </div>
    );
};

export default InfoContainer;
