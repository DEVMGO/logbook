import styles from './navigation.module.css';
import Link from "next/link";
import {getAllMenuItems} from "../../data/menu";

const Navigation = () => {

    const menuItems = getAllMenuItems();

    return (
        <div className={`${styles.nav} menuClass`}>
            <ul>
                {menuItems.map((menuItem) => (
                    <li className={menuItem.link.substr(1)} key={menuItem.id}>
                        <Link href={`/${menuItem.link}`}>
                            {menuItem.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navigation;