import { useState } from "react";
import { Fragment } from "react";
import styles from './registerparvaz.module.css';
import Sabt_Parvaz from "./sabt_parvaz";
import UploadIgc from "./uploadigc";

const RegisterParvaz = () => {

    const [signIn, setSignIn] = useState(true);
    const showLogin = () => setSignIn(true);
    const showSignup = () => setSignIn(false);

    return (
        <Fragment>
            <section className={styles.register_parvaz}>
                <div className={styles.tab}>
                    <ul className={styles.nav}>
                        <li
                            onClick={showLogin}
                            className={signIn ? styles.showsignup : styles.hidesignup}
                        >
                            ثبت پرواز
                        </li>
                        <li
                            onClick={showSignup}
                            className={signIn ? styles.hidesignup : styles.showsignup}
                        >
                            آپلود IGC
                        </li>
                    </ul>

                    {signIn ?
                        <div>
                            <Sabt_Parvaz />
                        </div>
                        :
                        <div>
                            <UploadIgc />
                        </div>
                    }
                </div>
            </section>
        </Fragment>
    );
};

export default RegisterParvaz;