import React from 'react';
import styles from './styles.module.scss';
import Fade from 'react-reveal/Fade';

const index = () => {
    return (
        <div className={styles.container}>
            <Fade left>
                <section>
                    <h1>What’s our motto?</h1>
                    <p>
                        We, at Samagati, aspire to promote Gap Culture through
                        Experiential Learning. We conduct a series of
                        experiments to promote gap culture in the form of gap
                        days, weeks, months, and years. Shortly, we plan to
                        instill this ideology around the nation and subsequently
                        throughout the globe.
                    </p>
                </section>
            </Fade>
            <Fade right>
                <div></div>
            </Fade>
        </div>
    );
};

export default index;
