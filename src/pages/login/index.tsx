import { useState } from 'react';

import styles from './styles.module.scss';
import FormContainer from '../../components/page/login/formContainer';
import ImageContainer from '../../components/page/login/imageContainer';

const Login = () => {
    return (
        <div className={styles.container}>
            <FormContainer />
            <ImageContainer />
        </div>
    );
};

export default Login;
