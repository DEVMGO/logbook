import { useState } from "react";
import { Fragment } from "react";
import styles from './savabeghmorabi.module.css';
import BodyRecords from '../flight_records/bodyrecords'
import FlyingStudents from "./flyingstudents";

const Savabegh_Morabi = () => {

    const [morabi, setMorabi] = useState(1);
    const showPlay = () => setMorabi(1);
    const showFree = () => setMorabi(2);
    const showStudentp = () => setMorabi(3);

    return (
        <Fragment>
            <section className={styles.savabegh_morabi}>
                <div className={styles.tab}>
                    <ul className={styles.nav}>
                        <li
                            onClick={showPlay}
                            className={morabi == 1 ? styles.showsignup : styles.hidesignup}
                        >
                            پرواز تفریحی
                        </li>
                        <li
                            onClick={showFree}
                            className={morabi == 2 ? styles.showsignup : styles.hidesignup}
                        >
                            پرواز آزاد
                        </li>
                        <li
                            onClick={showStudentp}
                            className={morabi == 3 ? styles.showsignup : styles.hidesignup}
                        >
                            پرواز شاگردان
                        </li>
                    </ul>

                    {morabi == 1 || morabi == 2 ?
                        <BodyRecords />
                        :
                        <FlyingStudents />
                    }

                </div>
            </section>
        </Fragment>
    );
};

export default Savabegh_Morabi;