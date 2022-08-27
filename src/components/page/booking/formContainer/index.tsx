import React, { useContext } from 'react';
import Input from './inputBox';
import NueButton from './btn';
import styles from './styles.module.scss';
import { useState } from 'react';
import TextArea from './textArea';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../../app/auth';

const FormContainer = () => {
    const { value } = useContext(AuthContext);
    const params = useParams();
    const [values, setValues] = useState({
        name: '',
        email: '',
        contact: '',
        redeem: '',
        learnings: '',
    });

    console.log(params);

    const handleChange = (name: string, value: string) => {
        setValues({
            ...values,
            [name]: value,
        });
    };

    const onSubmit = (e: any) => {
        e.preventDefault();
        if (value.user === null) {
            alert('please login before booking');
        }
    };

    return (
        <div className={styles.container}>
            <div>
                <h1>Book your spot on our next Voyage!</h1>
                <form onSubmit={onSubmit}>
                    <Input
                        placeholder='Enter your name'
                        type='text'
                        onChange={(value: string) => {
                            handleChange('name', value);
                        }}
                    />

                    <Input
                        placeholder='Enter your email'
                        type='email'
                        onChange={(value: string) => {
                            handleChange('email', value);
                        }}
                    />

                    <Input
                        placeholder='Enter your contact'
                        type='text'
                        onChange={(value: string) => {
                            handleChange('contact', value);
                        }}
                    />

                    <TextArea
                        placeholder='Enter your expected learning from this tour'
                        onChange={(value: string) => {
                            handleChange('learnings', value);
                        }}
                    />

                    <Input
                        placeholder='Redeem your creadits'
                        type='text'
                        onChange={(value: string) => {
                            handleChange('redeem', value);
                        }}
                    />

                    <NueButton />
                </form>
            </div>
        </div>
    );
};

export default FormContainer;
