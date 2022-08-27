import styles from './styles.module.scss';

import ImageContainer from '../../components/page/register/imageContainer';
import FormContainer from '../../components/page/register/formContainer';

const Register = () => {
    return (
        <div className={styles.container}>
            <FormContainer />
            <ImageContainer />
        </div>
    );
};

export default Register;
