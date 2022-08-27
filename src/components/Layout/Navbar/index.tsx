import {
    AiOutlineHome,
    AiOutlineInfo,
    AiOutlinePhone,
    AiOutlineCompass,
} from 'react-icons/ai';
import { RiLoginBoxLine, RiTeamLine } from 'react-icons/ri';

import NavBtn from '../../UI/NavBtn/index';
import styles from './styles.module.scss';

import Logo from '../../../assets/image/Logo.png';
import { useContext } from 'react';
import { AuthContext } from '../../../app/auth';
const Navbar = () => {
    const { value, setValue } = useContext(AuthContext);
    return (
        <div className={styles.container}>
            <img src={Logo} width={186} height={43} alt='Samagati' />
            <ul className={styles.NavList}>
                <li>
                    <NavBtn Icon={AiOutlineHome} Label='Home' page_link='/' />
                </li>
                <li>
                    <NavBtn
                        Icon={AiOutlineInfo}
                        Label='About us'
                        page_link='/about-us'
                    />
                </li>
                <li>
                    <NavBtn Icon={RiTeamLine} Label='Team' page_link='/team' />
                </li>
                <li>
                    <NavBtn
                        Icon={AiOutlineCompass}
                        Label='Tours'
                        page_link='/tours'
                    />
                </li>
                <li>
                    <NavBtn
                        Icon={AiOutlinePhone}
                        Label='Phone'
                        page_link='/contact'
                    />
                </li>
                <li style={{ marginLeft: '4rem' }}>
                    {value.user !== null ? (
                        <button
                            onClick={() => {
                                setValue({ user: null });
                                localStorage.removeItem('samagati_jwt');
                                localStorage.removeItem('samagati_user');
                            }}
                        >
                            {value.user.username}
                        </button>
                    ) : (
                        <NavBtn
                            Icon={RiLoginBoxLine}
                            Label='Login'
                            page_link='/login'
                        />
                    )}
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
