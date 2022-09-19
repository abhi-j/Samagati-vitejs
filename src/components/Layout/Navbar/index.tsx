import {
    AiOutlineHome,
    AiOutlineInfo,
    AiOutlinePhone,
    AiOutlineCompass,
} from 'react-icons/ai';
import { BsPersonCircle } from 'react-icons/bs';
import { BiMenuAltRight, BiX } from 'react-icons/bi';
import { RiLoginBoxLine, RiTeamLine } from 'react-icons/ri';

import NavBtn from '../../UI/NavBtn';
import NavBtnLog from '../../UI/NavBtnLog';

import styles from './styles.module.scss';

import Logo from '../../../assets/image/Logo.png';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../app/auth';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const { value, setValue } = useContext(AuthContext);
    const [menu, setMenu] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenu(!menu);
    };

    const clickHandler = () => {
        setMenu(false);
    };

    return (
        <>
            <div className={styles.container}>
                <Link to='/'>
                    <img src={Logo} width={186} height={43} alt='Samagati' />
                </Link>
                <ul className={styles.NavList}>
                    <li>
                        <NavBtn
                            Icon={AiOutlineHome}
                            Label='Home'
                            page_link='/'
                        />
                    </li>
                    <li>
                        <NavBtn
                            Icon={AiOutlineInfo}
                            Label='About'
                            page_link='/about'
                        />
                    </li>
                    <li>
                        <NavBtn
                            Icon={RiTeamLine}
                            Label='Team'
                            page_link='/team'
                        />
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

                    {value.user !== null ? (
                        <>
                            <li style={{ marginLeft: '4rem' }}>
                                <NavBtn
                                    Icon={BsPersonCircle}
                                    Label='Profile'
                                    page_link='/userProfile'
                                />
                            </li>
                            <li>
                                <NavBtnLog
                                    handleClick={() => {
                                        setValue({ user: null });
                                        localStorage.removeItem('samagati_jwt');
                                        localStorage.removeItem(
                                            'samagati_user'
                                        );
                                    }}
                                    Icon={RiLoginBoxLine}
                                    Label='Logout'
                                />
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <NavBtn
                                    Icon={RiLoginBoxLine}
                                    Label='Login'
                                    page_link='/login'
                                />
                            </li>
                        </>
                    )}
                </ul>
            </div>

            <div className={styles.phonecontainer}>
                <Link to='/'>
                    <img src={Logo} width={186} height={43} alt='Samagati' />
                </Link>
                <ul
                    style={{
                        top: menu ? '0vh' : '-100vh',
                    }}
                >
                    <li onClick={clickHandler}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li onClick={clickHandler}>
                        <Link to='/about'>About</Link>
                    </li>
                    <li onClick={clickHandler}>
                        <Link to='/team'>Team</Link>
                    </li>
                    <li onClick={clickHandler}>
                        <Link to='/tours'>Tours</Link>
                    </li>
                    <li onClick={clickHandler}>
                        <Link to='/contact'>Contact</Link>
                    </li>

                    {value.user !== null ? (
                        <>
                            <li>
                                <Link to='/userProfile'>Profile</Link>
                            </li>
                            <li
                                onClick={() => {
                                    setValue({ user: null });
                                    localStorage.removeItem('samagati_jwt');
                                    localStorage.removeItem('samagati_user');
                                }}
                            >
                                Logout
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to='/login'>Login</Link>
                            </li>
                        </>
                    )}

                    <BiX className='icon' onClick={toggleMenu} />
                </ul>
                <BiMenuAltRight onClick={toggleMenu} />
            </div>
        </>
    );
};

export default Navbar;
