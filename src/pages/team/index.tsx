import CardList from '../../components/page/team/cardList';
import TeamForm from '../../components/page/team/form';
import styles from './styles.module.scss';

const Team = () => {
    return (
        <div className={styles.container}>
            <div
                className={
                    styles.textContainer + ' top-margin-high primary-color'
                }
            >
                <h1>Our Beloved Team</h1>
                <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that
                </p>
            </div>

            <CardList />

            <TeamForm />
        </div>
    );
};

export default Team;
