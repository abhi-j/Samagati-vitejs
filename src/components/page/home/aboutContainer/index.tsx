import React from 'react';
import styles from './styles.module.scss';
import Fade from 'react-reveal/Fade';

const index = () => {
    return (
        <div className={styles.container}>
            <Fade left>
                <section>
                    <h1>What’s Our moto?</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque eget ullamcorper tellus. Aenean eget imperdiet
                        libero. Pellentesque lobortis gravida augue vel dapibus.
                        Aliquam ac tempus massa. Vivamus interdum nibh at leo
                        fringilla suscipit. Duis quis faucibus metus. Cras
                        tellus purus, venenatis et aliquam at, congue quis ante.
                        Ut a libero id urna porta feugiat. Aliquam faucibus
                        ipsum ex
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
