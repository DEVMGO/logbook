import {Fragment} from "react";
import styles from './items.module.css';
import Bell from "../icons/bell";
import Logout from "../icons/logout";

const Items = () => {
    return (
        <Fragment>
            <div className={styles.items}>
                <span>
                    <Bell />
                </span>
                <span>
                    <Logout />
                </span>
            </div>
        </Fragment>
    )
};

export default Items;