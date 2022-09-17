import React, { useRef } from 'react';
import { useIsVisible } from 'react-is-visible';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

const data = [
    {
        name: 'tour1',
        left: 60,
        top: 20,
    },
    {
        name: 'tour2',
        left: 40,
        top: 20,
    },
    {
        name: 'tour3',
        left: 35,
        top: 35,
    },
    {
        name: 'tour4',
        left: 50,
        top: 25,
    },
    {
        name: 'tour5',
        left: 50,
        top: 70,
    },
];

const Globe = () => {
    const nodeRef = useRef() as React.LegacyRef<HTMLButtonElement>;
    const isVisible = useIsVisible(nodeRef);
    const navigate = useNavigate();

    const style = {
        backgroundSize: isVisible ? '200%' : '100%',
        backgroundPosition: isVisible ? 'center right' : 'center center',
    };

    return (
        <div className={styles.container}>
            <div style={style} className={styles.globe}>
                <button ref={nodeRef}>hello</button>
                {isVisible && (
                    <>
                        {data.map((item) => (
                            <div
                                className={styles.dots}
                                style={{
                                    top: `${item.top}vh`,
                                    left: `${item.left}vw`,
                                }}
                                onClick={() => {
                                    navigate('/tours');
                                }}
                            >
                                {item.name}
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default Globe;
