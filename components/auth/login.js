import { Fragment, useState, useEffect, useRef } from "react";
import styles from './login.module.css';
import UserInput from "../icons/user-input";
import Eye from "../icons/eye";
import Lock from "../icons/lock";
import Mail from "../icons/mail";
import Button from "../ui/button";
import { getRedirectStatus } from "next/dist/lib/load-custom-routes";
import { Router, useRouter } from "next/router";
import React, { useContext } from "react";
import { ThemeContext, THEME_TYPE } from "./themprovider";

const Login = () => {

    const { themeMode, setThemeMode } = useContext(ThemeContext);

    const router = useRouter()
    const [newTodo, setNewTodo] = useState({
        username: '',
        passwoard: ''
    })

    const LoginAdmin = () => {
        setThemeMode(newTodo.username)
        if(newTodo.username == THEME_TYPE.ADMIN) {
            router.push('/app/')
        }else if(newTodo.username == THEME_TYPE.MORABI){
            router.push('/app')
        }
        else if(newTodo.username == THEME_TYPE.KHALABAN){
            router.push('/app')
        }
        else if(newTodo.username == THEME_TYPE.ANJOMAN){
            router.push('/app/anjoman')
        }
    }

    const [showPassword, setShowPassword] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [forget, setForget] = useState(false);

    const showForget = () => setForget(true);

    useEffect(() => {
        const storedUserLoggedInInfoStorage = localStorage.getItem('isLoggedIn');

        if (storedUserLoggedInInfoStorage === '1') {
            setIsLoggedIn(true);
        }
    }, []);

    const togglePassVisibility = () => {
        setShowPassword(showPassword ? false : true);
    };

    // const formSubmitHandler = (email, password) => {
    //     localStorage.setItem('isLoggedIn', '1');
    //     setIsLoggedIn(true);
    // }


    return (
        <Fragment>

            <div className={styles.controllers}>
                <UserInput />
                <input
                    id="username"
                    type="text"
                    name="username"
                    placeholder="?????? ????????????"
                    value={newTodo.username}
                    onChange={(e) => setNewTodo({...newTodo, username: e.target.value})}
                />
            </div>

            <div className={styles.controllers}>
                <Lock />
                <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="?????? ????????"
                    value={newTodo.passwoard}
                    onChange={(e) => setNewTodo({...newTodo, passwoard: e.target.value})}
                />
                <span>
                    <Eye onClick={togglePassVisibility} />
                </span>
            </div>

            <a className={styles.forget} onClick={showForget}>?????? ???????? ?????? ???? ???????????? ???????? ????????</a>

            <Button className={styles['login-btn']} onClick={LoginAdmin}>
                ????????
            </Button>

            <div className={styles.box_remember}>
                <input type="checkbox" />
                <span className={styles.remember_me}>?????? ?????????? ??????????</span>
            </div>

            {forget ?
                <div>
                    <p className={styles.remember}>???? ???????? ?????????????? ?????? ???????? ???? ???????? ???????? ???????????? ???? ???? ???????? ?????? ?????? ???????? ?????????? ???????????? ???? ?????????????? ????????</p>
                    <div className={styles.controllers}>
                        <Mail />
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="??????????"
                        />
                    </div>
                    <Button className={styles['login-btn']}>
                        ??????????
                    </Button>
                </div>
                : ''
            }

        </Fragment>
    );
};

export default Login;