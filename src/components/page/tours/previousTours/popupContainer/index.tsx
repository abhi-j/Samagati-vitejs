import { createPortal } from 'react-dom';
import Corousal from './Corousal';
import styles from './styles.module.scss';

const index = ({ setShow, video, description, testimonial, name }) => {
    return createPortal(
        <div
            className={styles.container}
            onClick={(e) => {
                e.stopPropagation();
                setShow((val) => !val);
            }}
        >
            <div
                className={styles.infoContainer}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <video width='100%' height='280px' autoPlay controls>
                    <source src={video} type='video/mp4' />
                    Your browser does not support the video tag.
                </video>

                <section>
                    <h1>{name}</h1>
                    <p>{description}</p>
                    <h2>Some more clicks ...</h2>
                    <Corousal />
                </section>
            </div>
        </div>,
        document.getElementById('popup') as HTMLElement
    );
};

export default index;
