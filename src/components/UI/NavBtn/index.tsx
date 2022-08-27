import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './navbtn.module.css';
type props = {
    Label: string;
    Icon: any;
    page_link: string;
};

const NavBtn: React.FC<props> = (Props: props) => {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate(Props.page_link);
    };
    return (
        <div className={styles.container} onClick={handleClick}>
            <Props.Icon className={styles.navBtnIcon} />
            <span className={styles.navBtnText}>{Props.Label}</span>
        </div>
    );
};

export default NavBtn;
