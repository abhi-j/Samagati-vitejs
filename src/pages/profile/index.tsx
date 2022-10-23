import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Oval } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../app/auth';
import NueButton from '../../components/UI/NueButton';
import { API_LINK } from '../../config';
import { getUserData } from '../../services/auth';
import styles from './style.module.scss';
import { BsCameraFill } from 'react-icons/bs';

const Profile = () => {
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

    let initialName = value.user !== null ? value.user.username : '';
    let initialDob = value.user !== null ? value.user.DOB : '';
    let initialDescription = value.user !== null ? value.user.Description : '';
    let initialEmail = value.user !== null ? value.user.email : '';
    let initialContact = value.user !== null ? value.user.Contact : '';
    let initialSkill = value.user !== null ? value.user.Skills : '';

    console.log(
        initialEmail,
        initialName,
        initialContact,
        initialDescription,
        initialSkill
    );

    const [name, setName] = useState(initialName);
    const [dob, setDob] = useState(initialDob);
    const [description, setDescription] = useState(initialDescription);
    const [email, setEmail] = useState(initialEmail);
    const [contact, setContact] = useState(initialContact);
    const [skill, setSkill] = useState(initialSkill);
    const [image, Image] = useState([]);

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

    const onSubmit = async () => {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('samagati_jwt')}`,
            },
        };

        try {
            await axios.put(
                `${API_LINK}/api/users/${value.user.id}`,
                {
                    Contact: contact,
                    Credit: value.user.Credit,
                    DOB: dob,
                    Description: description,
                    Skills: skill,
                    email: email,
                    username: name,
                    Image: image,
                },
                config
            );

            setValue({
                user: {
                    ...value.user,
                    Contact: contact,
                    DOB: dob,
                    Description: description,
                    Skills: skill,
                    email: email,
                    username: name,
                    Image: image,
                },
            });

            Swal.fire({
                title: 'Profile data saved',
                text: 'Your profile is completed',
                icon: 'success',
                confirmButtonText: 'Done',
            });
            navigate('/userProfile');
        } catch (e) {
            console.log(e);
            return;
        }
    };

    return (
        <div className={styles.container}>
            <div>
                <span className={styles.picture}>
                    <img src='/image/Profile.png' alt=''></img>
                </span>
                <div className={styles.photo}>
                    <label htmlFor='file-upload' className={styles.fileUpload}>
                        <div className={styles.upload}>
                            <BsCameraFill />
                            <p>Upload picture</p>
                        </div>
                    </label>
                    <input id='file-upload' type='file' />
                </div>
                <form className={styles.formContainer}>
                    <input
                        value={name}
                        type='text'
                        name='profile'
                        placeholder='Name'
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    <input
                        value={dob}
                        type='date'
                        name='dob'
                        placeholder='Date of birth'
                        onChange={(e) => {
                            setDob(e.target.value);
                        }}
                    />
                    <input
                        value={description}
                        type='text'
                        placeholder='How would you describe yourself'
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                    />
                    <input
                        value={contact}
                        type='tel'
                        name='contact'
                        placeholder='Contact'
                        onChange={(e) => {
                            setContact(e.target.value);
                        }}
                    />
                    <input
                        value={email}
                        type='email'
                        name='email'
                        placeholder='Email '
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <input
                        value={skill}
                        type='text'
                        placeholder='Skills and Hobbies'
                        onChange={(e) => {
                            setSkill(e.target.value);
                        }}
                    />
                    <button
                        className={styles.btnn}
                        name='Submit'
                        onClick={onSubmit}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Profile;
