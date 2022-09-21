import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../app/auth';
import styles from './styles.module.scss';

const index = () => {
    const { value, setValue } = useContext(AuthContext);

    let initialName = value.user !== null ? value.user.username : '';
    let initialDob = value.user !== null ? value.user.DOB : '';
    let initialDescription = value.user !== null ? value.user.Description : '';
    let initialEmail = value.user !== null ? value.user.email : '';
    let initialContact = value.user !== null ? value.user.Contact : '';
    let initialSkill = value.user !== null ? value.user.Skills : '';
    const [name, setName] = useState(initialName);
    const [dob, setDob] = useState(initialDob);
    const [description, setDescription] = useState(initialDescription);
    const [email, setEmail] = useState(initialEmail);
    const [contact, setContact] = useState(initialContact);
    const [skill, setSkill] = useState(initialSkill);
    return (
        <div>
            <div>
                <span className={styles.picture}></span>
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
                    <NueButton name='Submit' key={''} onClick={onSubmit} />
                </form>
            </div>
        </div>
    );
};

export default index;
