import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import NueButton from './btn';
import styles from './styles.module.scss';

type props = {
    name: string;
    description: string;
    imageLink: string;
    slug: string;
};
const UpcommingTourCard: React.FC<props> = ({
    name,
    description,
    imageLink,
    slug,
}) => {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div></div>
                <img src={imageLink} alt='' />
            </div>
            <div className={styles.right}>
                <h1>{name}</h1>
                <p>{description}</p>
                <Link to={'/'}>Read more</Link>
                <NueButton
                    onClick={() => {
                        navigate(`/booking/${slug}`);
                    }}
                />
            </div>
        </div>
    );
};

export default UpcommingTourCard;
