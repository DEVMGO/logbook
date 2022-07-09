import {Fragment} from "react";
import styles from './header.module.css';
import Navigation from "../layout/navigation";
import HamburMenu from "../layout/hambur-menu";
import Items from "./items";

const Header = () => {
    return (
        <Fragment>
            <div className={styles['header-desktop']}>
                <Navigation/>
                <Items />
            </div>
            <div className={styles['header-mobile']}>
                <HamburMenu/>
            </div>
        </Fragment>
    );
};

export default Header;