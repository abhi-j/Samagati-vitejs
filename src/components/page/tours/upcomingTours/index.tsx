import React from 'react';
import { API_LINK } from '../../../../config';
import styles from './styles.module.scss';
import UpcommingTourCard from '../upcommingtourcard';

type props = {
    data: any;
};

const UpcommingTours: React.FC<props> = ({ data }) => {
    return (
        <div className={styles.container}>
            <h1>Upcoming Voyages and events</h1>
            <div className={styles.gridContainer}>
                {data.map((item: any, i: number) => (
                    <UpcommingTourCard
                        description={item.attributes.description}
                        name={item.attributes.Name}
                        imageLink={`${item.attributes.image.data.attributes.formats.small.url}`}
                        key={i}
                        slug={item.id}
                        data={item}
                    />
                ))}
            </div>
        </div>
    );
};

export default UpcommingTours;
