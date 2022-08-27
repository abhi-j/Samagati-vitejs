import FormContainer from '../../components/page/booking/formContainer';
import InfoContainer from '../../components/page/booking/infoContainer';
import styles from './styles.module.scss';

const Booking = () => {
    return (
        <div className={styles.container}>
            <InfoContainer />
            <FormContainer />
        </div>
    );
};

// export const getServerSideProps = async (context: any) => {
//     const session = await getSession(context);
//     // Check if session exists or not, if not, redirect
//     if (session == null) {
//         return {
//             redirect: {
//                 destination: '/auth/not-authenticated',
//                 permanent: true,
//             },
//         };
//     }
//     return {
//         props: {},
//     };
// };

export default Booking;
