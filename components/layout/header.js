import styles from './header.module.css';
import Navigation from "./navigation";
import Logo from "./logo";
import Login from "./login";
import {Fragment, useEffect} from "react";
import HamburMenu from "./hambur-menu";

const Header = () => {

    useEffect(() => {
        const current = window.location.pathname.substr(1);
        const menuLis = document.querySelectorAll("header li");
        for (let menuLi of menuLis) {
            if (menuLi.classList == current) {
                menuLi.classList.add("active");
            }
        }
        const menuItems = document.querySelectorAll("header li a");
        for (let menuItem of menuItems) {
            menuItem.onclick = () => {
                for (let other of menuItems)
                    other.parentElement.classList.remove("active");
                menuItem.parentElement.classList.add("active");
            };
        }
    })

    return (
        <Fragment>
            <div className={styles['header-desktop']}>
                <Navigation/>
                <Logo/>
                <Login/>
            </div>
            <div className={styles['header-mobile']}>
                <HamburMenu/>
                <Logo/>
                <Login/>
            </div>
        </Fragment>
    );
};

export default Header;