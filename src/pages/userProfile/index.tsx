import React, { useEffect, useState, useContext } from 'react';
import UserInfo from '../../components/page/userProfile/userInfo';
import BookingContainer from '../../components/page/userProfile/bookingContainer';
import { Oval } from 'react-loader-spinner';
import { getUserData } from '../../services/auth';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../app/auth';

const UserProfile = () => {
    const { value, setValue } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        const checkAuth = async () => {
            const jwt = localStorage.getItem('samagati_jwt');
            if (jwt != null) {
                if (value.user === null) {
                    const data = await getUserData(jwt);
                    setValue({
                        user: data,
                    });
                }
                setLoading(false);
            } else {
                navigate('/');
            }
        };
        checkAuth();
    }, []);
    console.log(value);

    if (loading) {
        return (
            <div
                style={{
                    width: '100vw',
                    height: '80vh',
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
        <>
            <UserInfo />
            <BookingContainer />
        </>
    );
};

export default UserProfile;
