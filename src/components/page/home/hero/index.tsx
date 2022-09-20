import React from 'react';
import styles from './styles.module.scss';
import Fade from 'react-reveal/Fade';

const index = () => {
    return (
        <div className={styles.container}>
            <Fade left>
                <div>
                    <section>
                        <h1>Samagati</h1>
                        <p>
                            We are a community having fun with education and
                            travelling.
                        </p>
                        <button>Explore</button>
                    </section>
                </div>
            </Fade>
        </div>
    );
};

export default index;
