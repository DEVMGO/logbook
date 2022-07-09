import React, {useState} from 'react';
import styles from './hambur-menu.module.css';
import {getAllMenuItems} from "../../data/menu";
import Link from "next/link";
import HamburIcon from "../icons/hambur-icon";
import RightHamburIcon from "../icons/right-hambur-icon";

const HamburMenu = () => {

    const [showMenu, setShowMenu] = useState(false);

    const showSidebar = () => {
        setShowMenu(!showMenu);
    };

    const menuItems = getAllMenuItems();

    return (
        <div className={styles.menu}>
            <div className={styles['hambur-menu']}>

                <RightHamburIcon onClick={showSidebar}/>
            </div>
            <nav className={showMenu ? 'nav active' : 'nav'}>
                <ul onClick={showSidebar}>
                    <li>
                        <i className="fa fa-bars"></i>
                    </li>
                    {menuItems.map((menuItem) => (
                        <li key={menuItem.id}>
                            <Link href={`/${menuItem.link}`}>
                                <a>
                                    {menuItem.title}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default HamburMenu;