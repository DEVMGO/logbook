import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import styles from "./menu.module.css";
import AppHome from "../icons/app-home";
import AppFlyReg from "../icons/app-flyReg";
import AppFlyRec from "../icons/app-flyRec";
import AppProfile from "../icons/app-profile";
import Send from "../icons/send";
import profile from "../../public/images/profile.png";

const Menu = () => {

    const router = useRouter();

    return (
        <Fragment>
            <div className={`col-2 ${styles['desktop-nav']}`}>
                <nav className={`${styles.wrapper}`}>
                    <div className={`${styles['wrapper__nav']}`}>
                        <div className={`${styles.profile}`}>
                            <div className={`${styles['img-wrapper']}`}>
                                <Image src={profile} alt="profile image" layout={"fill"} />
                            </div>
                            <div className={`${styles.info}`}>
                                <p>
                                    محمود شیرازی نیا
                                </p>
                                <p className={`${styles.level}`}>
                                    مقطع گواهی نامه:
                                </p>
                                <p className={`${styles.level}`}>
                                    پیشرفته
                                </p>
                            </div>
                        </div>
                        <nav>
                            <ul>
                                <li>
                                    <Link href="/app" className={styles.tab}>
                                        <a className={router.pathname == "/app" ? `${styles.active}` : ""}>
                                            <span>
                                                <AppHome />
                                            </span>
                                            خانه
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/app/sabtparvaz" className={styles.tab}>
                                        <a className={router.pathname == "/app/sabtparvaz" ? `${styles.active}` : ""}>
                                            <span>
                                                <AppFlyReg />
                                            </span>
                                            ثبت پرواز
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/app/savabegh_parvaz_new" className={styles.tab}>
                                        <a className={router.pathname == "/app/savabegh_parvaz_new" ? `${styles.active}` : ""}>
                                            <span>
                                                <AppFlyRec />
                                            </span>
                                            سوابق پروازی
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/app/profile" className={styles.tab}>
                                        <a className={router.pathname == "/app/profile" ? `${styles.active}` : ""}>
                                            <span>
                                                <AppProfile />
                                            </span>
                                            پروفایل
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/app/sabtball" className={styles.tab}>
                                        <a className={router.pathname == "/app/sabtball" ? `${styles.active}` : ""}>
                                            <span>
                                                <Send />
                                            </span>
                                            ثبت بال
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
                            <Link href="/app">
                                <a className={router.pathname == "/app" ? `${styles.active}` : ""}>
                                    <span>
                                        <AppHome />
                                    </span>
                                    خانه
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/app/sabtparvaz">
                                <a className={router.pathname == "/app/sabtparvaz" ? `${styles.active}` : ""}>
                                    <span>
                                        <AppFlyReg />
                                    </span>
                                    ثبت پرواز
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/app/savabegh_parvaz_new">
                                <a className={router.pathname == "/app/savabegh_parvaz_new" ? `${styles.active}` : ""}>
                                    <span>
                                        <AppFlyRec />
                                    </span>
                                    سوابق پروازی
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/app/profile">
                                <a className={router.pathname == "/app/profile" ? `${styles.active}` : ""}>
                                    <span>
                                        <AppProfile />
                                    </span>
                                    پروفایل
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/app/sabtball">
                                <a className={router.pathname == "/app/sabtball" ? `${styles.active}` : ""}>
                                    <span>
                                        <Send />
                                    </span>
                                    ثبت بال
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </Fragment>
    );
};

export default Menu;