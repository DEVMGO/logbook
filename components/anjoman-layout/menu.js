import { Fragment } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import { FaUserAlt } from 'react-icons/fa';
import styles from "./menu.module.css";
import Hat2 from "../icons/hat2";
import Users from "../icons/users";
import Dashboard from "../icons/dashboard";

const AnjomanMenu = () => {

    const router = useRouter();

    return (
        <Fragment>
            <div className={`col-2 ${styles['desktop-nav']}`}>
                <nav className={`${styles.wrapper}`}>
                    <div className={`${styles['wrapper__nav']}`}>
                        <div className={`${styles.profile}`}>
                            <div className={`${styles['img-wrapper']}`}>
                                <span className={styles.span_image}>
                                    <FaUserAlt className={styles.image_signup} />
                                </span>
                            </div>
                            <div className={`${styles.info}`}>
                                <p>
                                    انجمن
                                </p>
                                <p className={`${styles.level}`}>
                                    خروج از حساب کاربری
                                </p>
                            </div>
                        </div>
                        <nav>
                            <ul>
                                <li>
                                    <Link href="/app/anjoman">
                                        <a className={router.pathname == "/app/anjoman" ? `${styles.active}` : ""}>
                                            <span>
                                                <Dashboard />
                                            </span>
                                            داشبورد
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/app/anjoman/morabi">
                                        <a className={router.pathname == "/app/anjoman/morabi" ? `${styles.active}` : ""}>
                                            <span className={styles.iconhat}>
                                                <Hat2 />
                                            </span>
                                            مربی
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/app/anjoman/khalabanha">
                                        <a className={router.pathname == "/app/anjoman/khalabanha" ? `${styles.active}` : ""}>
                                            <span>
                                                <Users />
                                            </span>
                                            خلبان ها
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </nav>
            </div>
            <div className={`col-2 ${styles['mobile-nav']}`}>
                <nav>
                    <ul>
                        <li>
                            <Link href="/app/anjoman">
                                <a className={router.pathname == "/app/anjoman" ? `${styles.active}` : ""}>
                                    <span>
                                        <Dashboard />
                                    </span>
                                    داشبورد
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/app/anjoman/morabi">
                                <a className={router.pathname == "/app/anjoman/morabi" ? `${styles.active}` : ""}>
                                    <span className={styles.iconhat}>
                                        <Hat2 />
                                    </span>
                                    مربی
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/app/anjoman/khalabanha">
                                <a className={router.pathname == "/app/anjoman/khalabanha" ? `${styles.active}` : ""}>
                                    <span>
                                        <Users />
                                    </span>
                                    خلبان ها
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </Fragment>
    );
};

export default AnjomanMenu;