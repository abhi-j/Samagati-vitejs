import React, { useContext } from 'react';
import Input from './inputBox';
import NueButton from './btn';
import styles from './styles.module.scss';
import { useState } from 'react';
import TextArea from './textArea';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../../app/auth';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const STRIPE_PK =
    'pk_test_51KNVZKSCvyHnWtmxnbmcFMqluPZIrnqVmNRjFW6Oe1c4LYXQZFQF4WUb0kDFqk1g4VEm3nCeZLP0znP1vdWJ83HO004vA7sSau';

const stripePromise = loadStripe(STRIPE_PK);

const FormContainer = () => {
    const { value } = useContext(AuthContext);
    const { tour } = useParams();
    const [values, setValues] = useState({
        name: '',
        email: '',
        contact: '',
        redeem: '',
        learnings: '',
    });

    const handleChange = (name: string, value: string) => {
        setValues({
            ...values,
            [name]: value,
        });
    };

    const onSubmit = async (e: any) => {
        e.preventDefault();
        if (value.user === null) {
            alert('please login before booking');
            return;
        }

        const stripe = await stripePromise;
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('samagati_jwt')}`,
            },
        };

        const res = await axios.post(
            'http://localhost:1337/api/booking/pretransaction',
            {
                tour: {
                    id: tour,
                },
                user: {
                    name: values.name,
                    contact: values.contact,
                    email: values.email,
                    learning: values.learnings,
                },
            },
            config
        );

        const session = res.data;
        const result = await stripe?.redirectToCheckout({
            sessionId: session.id,
        });
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
