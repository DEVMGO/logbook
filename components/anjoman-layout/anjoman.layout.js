import {Fragment} from "react";
import Header from "../webapp-layout/header";
import styles from '../webapp-layout/webapp-layout.module.css';
import Menu from "./menu";

const AnjomanLayout = (props) => {
    return (
        <Fragment>
            <header className="header-webapp">
                <Header />
            </header>
            <main>
                <section className={`${styles.main}`}>
                    <Menu />
                    <div className={`col-10`}>
                        {props.children}
                    </div>
                </section>
                <style jsx global>{`body {background: url(../../images/auth/cloud.png) no-repeat;background-size: cover;background-attachment: fixed;}@media (max-width: 768px){body{background: url(../../images/auth/cloud.png);background-size: contain;background-attachment: fixed;}}`}</style>
            </main>
        </Fragment>
    )
};

export default AnjomanLayout;