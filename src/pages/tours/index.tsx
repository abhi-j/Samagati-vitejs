import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Info from '../../components/page/tours/info';
import PreviousTours from '../../components/page/tours/previousTours';
import UpcommingTours from '../../components/page/tours/upcomingTours';
import { API_TOKEN, API_LINK } from '../../config';
import Footer from '../footer';
import styles from './styles.module.scss';

const Tours = () => {
    const [tours, setTours] = useState<any>({});

    useEffect(() => {
        window.scrollTo(0, 0);

        async function getdata() {
            const config = {
                headers: {
                    Authorization: `Bearer ${API_TOKEN}`,
                },
            };
            const res = await axios.get(`${API_LINK}/api/tours?populate=*`);
            const products = res.data;
            setTours(products);
        }
        getdata();
    }, []);

    console.log(tours);

    return (
        <>
            <div className={styles.container}>
                <div>
                    <Info
                        title={'What are Samagati Voyages?'}
                        text={`Our voyages are a fun way of exploring the subtleness the world has to offer 
                        and the diverse teachings it provides through nature. Not only does traveling relieve stress, 
                        but it also enhances creativity and boosts happiness and satisfaction. These voyages give the 
                        students a global perspective of education, helping them discover the endless possibilities of education.`}
                    />
                </div>

                {tours.data ? <UpcommingTours data={tours?.data} /> : <h1></h1>}
                <div>
                    <Info
                        title={'Our previous voyages'}
                        text={
                            'In our past voyages with MIT ID students (Pune and Indore), we have experienced\
            Maheshwar, Madhya Pradesh: to understand the story of a woman, Ahilya Bai Holkar - one\
            of the top administrators and rulers India has ever produced.\
            Barefoot College International, Rajasthan: to interact with Solar Mamas from Africa and\
            South-East Asia and understand the value of rural wisdom.\
            '
                        }
                    />
                </div>
                <PreviousTours />
            </div>
            <Footer />
        </>
    );
};

export default Tours;
