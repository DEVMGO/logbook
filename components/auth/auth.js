import { useState } from "react";
import { Fragment } from "react";
import styles from './auth.module.css';
import Login from "./login";
import Image from "next/image";
import Link from "next/link";
import ImageUser from "../../public/images/profile.png";
import Arrow from "../../public/images/Icon_arrow_up.svg";
import Signup from "./signUp";
import { FaUserAlt } from 'react-icons/fa';

const Auth = () => {

    const [signIn, setSignIn] = useState(true);
    const showLogin = () => setSignIn(true);
    const showSignup = () => setSignIn(false);

    return (
        <Fragment>
            <section className={styles.auth}>
                <div className={styles.box_image_user}>
                    {signIn ?
                        <Image src={ImageUser} className={styles.image_user} />
                        :
                        <>
                            <span className={styles.span_image}>
                                <FaUserAlt className={styles.image_signup} />
                            </span>
                            <div className={styles.box_upload}>
                                <button className={styles.btn_upload}>+</button>
                                <input type="file" />
                            </div>
                        </>
                    }
                </div>
                <div className={styles.tab}>
                    <ul className={styles.nav}>
                        <li
                            onClick={showLogin}
                            className={signIn ? styles.showsignup : styles.hidesignup}
                        >
                            ورود
                        </li>
                        <li
                            onClick={showSignup}
                            className={signIn ? styles.hidesignup : styles.showsignup}
                        >
                            ثبت نام
                        </li>
                    </ul>

                    {signIn ?
                        <div>
                            <Login />
                        </div>
                        :
                        <div>
                            <Signup />
                        </div>
                    }
                </div>


                <Link href='/' >
                    <button className={styles.btn_back}>
                        بازگشت به صفحه اصلی <Image src={Arrow} className={styles.image_arrow} />
                    </button>
                </Link>
            </section>
        </Fragment>
    );
};

export default Auth;