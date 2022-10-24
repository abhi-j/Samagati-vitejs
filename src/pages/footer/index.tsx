/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer() {
    const navigate = useNavigate();

    const onClick = (path) => {
        navigate(path);
    };
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerLogo}>
                <Link to='/'>
                    <img src='/src/assets/image/Logo.png' alt='Logo' />
                </Link>
            </div>
            <div>
                <div className={styles.linkContainer}>
                    <div className={styles.left}>
                        <h3>Links</h3>
                        <div>
                            <span onClick={() => onClick('/')}>Home</span>
                            <span onClick={() => onClick('/about')}>
                                About us
                            </span>
                            <span onClick={() => onClick('/teams')}>Teams</span>
                            <span onClick={() => onClick('/tours')}>Tours</span>
                            <span onClick={() => onClick('/contact')}>
                                Contact
                            </span>
                        </div>
                    </div>

                    <div className={styles.right}>
                        <h3>Contact</h3>
                        <div>
                            <span>9588043164 | 8805388985 | 6265987173</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
