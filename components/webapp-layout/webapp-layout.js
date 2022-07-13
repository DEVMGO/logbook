import { Fragment } from "react";
import Image from "next/image";
import Header from "./header";
import styles from './webapp-layout.module.css';
import Menu from "./menu";
import profile from "../../public/images/profile.png";

const WebappLayout = (props) => {
    return (
        <Fragment>
            <header className="header-webapp">
                <Header />
                <div className={`${styles.profile}`}>
                    <div className={`${styles['img-wrapper']}`}>
                        <Image src={profile} alt="profile image" layout={"fill"} />
                    </div>
                    <div className={`${styles.info}`}>
                        <p>
                            محمود شیرازی نیا
                        </p>
                    </div>
                </div>
            </header>
            <main>
                <section className={`${styles.main}`}>
                    <Menu />
                    <div className={`col-10`}>
                        {props.children}
                    </div>
                </section>
                <style jsx global>{`body {background: url(../../images/auth/Back.jpg) no-repeat;background-size: cover;background-attachment: fixed;}@media (max-width: 768px){body{background: url(../../images/auth/cloud.png);background-size: contain;background-attachment: fixed;}}`}</style>
            </main>
        </Fragment>
    )
};

export default WebappLayout;