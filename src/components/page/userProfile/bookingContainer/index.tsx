import React, { useContext, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Card from './Card';
import axios from 'axios';
import { API_LINK } from '../../../../config';
import { AuthContext } from '../../../../app/auth';
import { Oval } from 'react-loader-spinner';

const index = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { value, setValue } = useContext(AuthContext);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('samagati_jwt')}`,
            },
        };
        const getBookingData = async () => {
            const res = await axios.post(`${API_LINK}/api/booking/user`, {
                userId: value.user.id,
                value: 'this is test',
            });

            console.log(res.data);

            setData(res.data.data);
        };
        getBookingData();
        setLoading(false);
    }, []);

    console.log(data);

    if (loading) {
        return (
            <div
                style={{
                    width: '100vw',
                    height: '50vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Oval
                    height={80}
                    width={80}
                    color='#173b82'
                    wrapperStyle={{}}
                    wrapperClass=''
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor='#173b825f'
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                />
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <h1>My booking</h1>

            {data.length > 0 ? (
                <div className={styles.gridContainer}>
                    {data.map((item) => (
                        <Card item={item} />
                    ))}
                </div>
            ) : (
                <h1
                    style={{
                        fontWeight: '500',
                        textAlign: 'center',
                        marginTop: '100px',
                        marginBottom: '100px',
                    }}
                >
                    You do not have any booking
                </h1>
            )}
        </div>
    );
};

export default index;
