import React from 'react';
import { AiFillLinkedin, AiFillMail, AiOutlineInstagram } from 'react-icons/ai';
import styles from './styles.module.scss';
const index = () => {
    return (
        <div className={styles.container}>
            <div>
                <h1>Dhruv Champaneri</h1>
                <p
                    style={{
                        color: '#747474',
                    }}
                >
                    Founder
                </p>
            </div>
            <div className={styles.infoContainer}>
                <div>
                    <div>
                        <h3>Bio</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Velit beatae, maiores adipisci corporis unde
                        </p>
                    </div>
                    <div>
                        <h3>DOB</h3>
                        <p>Demo</p>
                    </div>
                    <div>
                        <h3>Education</h3>
                        <p>Demo</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>Connect with me</h3>
                        <div
                            style={{
                                display: 'flex',
                                gap: 12,
                                fontSize: 24,
                                color: '#173b82',
                            }}
                        >
                            <AiOutlineInstagram />
                            <AiFillLinkedin />
                            <AiFillMail />
                        </div>
                    </div>
                    <div>
                        <h3>Milestones</h3>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Sequi suscipit aspernatur repellendus
                            corporis, rerum possimus sit at? Harum excepturi at
                            voluptas ipsum aliquid nostrum, cum nulla culpa
                            laboriosam sit tenetur.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;
