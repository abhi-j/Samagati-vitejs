import {
    AiOutlineInstagram,
    AiFillLinkedin,
    AiOutlineMail,
} from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import { useState } from 'react';

import TextAreaBox from '../../components/UI/TextAreaBox';
import NueButton from '../../components/UI/NueButton';
import FloatingBtn from '../../components/UI/Floatingbtn';
import Input from '../../components/UI/Input';
import styles from './styles.module.scss';
import SocialMediaBtn from '../../components/UI/SocialMediaBtn';

const Contact = () => {
    // function sendEmail(a: {
    //     preventDefault: () => void;
    //     target: string | HTMLFormElement;
    // }) {
    //     a.preventDefault();
    //     emailjs
    //         .sendForm(
    //             'service_7e00v1n',
    //             'template_h2fzeuk',
    //             a.target,
    //             'aZzY8s0Q9IsbUPQLN'
    //         )
    //         .then((res) => {
    //             console.log(res);
    //         })
    //         .catch((err) => console.log(err));
    // }

    const [question, setQuestion] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    return (
        <div className={styles.pageContainer}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div>
                        <h1>Start talking!</h1>
                        <h3>Ask your questions</h3>
                    </div>

                    <Input
                        placeholder='Enter your email address'
                        onChange={setEmail}
                        type='email'
                    />
                    <TextAreaBox
                        placeholder='Enter question here...'
                        onChange={setQuestion}
                    />
                    <NueButton name='Send' />
                    <div className={styles.iconContainer}>
                        <SocialMediaBtn icon={AiOutlineInstagram} />
                        <SocialMediaBtn icon={AiFillLinkedin} />
                        <SocialMediaBtn icon={AiOutlineMail} />
                        <SocialMediaBtn icon={FiTwitter} />
                    </div>
                </div>
                <div className={styles.right}>
                    <h1>Samagati Office</h1>
                    <p>
                        Avantika University, Vishwanathpuram, Lekoda, Madhya
                        Pradesh 456006
                    </p>

                    <h2>avantika.samagati@avantika.edu.in</h2>
                    <p>9588043164, 8805388985, 6265987173</p>
                </div>
            </div>
            <FloatingBtn />
        </div>
    );
};

export default Contact;
