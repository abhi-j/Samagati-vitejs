import React, { useRef } from 'react';
import { useIsVisible } from 'react-is-visible';
import styles from './styles.module.scss';

const Globe = () => {
    const nodeRef = useRef() as React.LegacyRef<HTMLButtonElement>;
    const isVisible = useIsVisible(nodeRef);

    const style = {
        backgroundSize: isVisible ? '200%' : '100%',
        backgroundPosition: isVisible ? 'center right' : 'center center',
    };

    const dotStyles = {
        width: isVisible ? '30px' : '0px',
        height: isVisible ? '30px' : '0px',
    };

    return (
        <div className={styles.container}>
            <div style={style} className={styles.globe}>
                {/* <div
                    className={styles.dots}
                    style={{
                        top: '40vh',
                        right: '50vw',
                        ...dotStyles,
                    }}
                >
                    1
                </div>
                <div
                    className={styles.dots}
                    style={{
                        bottom: '60vh',
                        left: '40vw',
                        ...dotStyles,
                    }}
                >
                    2
                </div>
                <div
                    className={styles.dots}
                    style={{
                        bottom: '55vh',
                        left: '50vw',
                        ...dotStyles,
                    }}
                >
                    3
                </div>
                <div
                    className={styles.dots}
                    style={{
                        top: '35vh',
                        right: '55vw',
                        ...dotStyles,
                    }}
                >
                    4
                </div> */}
            </div>
            <button ref={nodeRef}>hello</button>
        </div>
    );
};

export default Globe;
