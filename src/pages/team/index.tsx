import CardList from '../../components/page/team/cardList';
import TeamForm from '../../components/page/team/form';
import Footer from '../footer';
import styles from './styles.module.scss';

const Team = () => {
    return (
        <div className={styles.container}>
            <div
                className={
                    styles.textContainer + ' top-margin-high primary-color'
                }
            >
                <h1>Our Ecosystem</h1>
                <p>
                    “Coming together is the beginning, keeping together is
                    progress and working together is success.”
                </p>
                <p
                    style={{
                        fontStyle: 'italic',
                    }}
                >
                    -Henry Ford
                </p>
            </div>

            <CardList />

            <TeamForm />
            <Footer />
        </div>
    );
};

export default Team;
