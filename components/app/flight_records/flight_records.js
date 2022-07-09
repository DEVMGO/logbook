import { Fragment } from "react";
import BodyRecords from "./bodyrecords";
import styles from './flight_records.module.css';

const Flight_Records = () => {

    return (
        <Fragment>
            <section className={styles.register_parvaz}>
                <div className={styles.tab}>
                    <ul className={styles.nav}>
                        <li
                            className={styles.showsignup}
                        >
                            سوابق پروازی
                        </li>
                    </ul>

                    <BodyRecords />
                </div>
            </section>
        </Fragment>
    );
};

export default Flight_Records;