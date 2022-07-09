import { useState } from "react";
import styles from './anjoman_morabi_savabegh.module.css';
import Gem from "../../icons/gem";
import Hat2 from "../../icons/hat2";
import Calendar from "../../icons/calendar";
import BodyRecords from "../flight_records/bodyrecords";


const AnjomanMorabiSavabegh = () => {

    const [showData, setShowData] = useState(true);
    const ShowAll = () => setShowData(true)
    const ShowFun = () => setShowData(false)

    return (
        <>

            <div className={styles.box}>
                <div className={styles.box_right}>
                    <div className={styles.header_box}>
                        <div className={styles.title_left}>
                            <Hat2 />
                            <h5>تعداد شاگردان</h5>
                        </div>
                    </div>

                    <div className={styles.listdata_morabi}>
                        <div className={styles.data}>
                            <div className={styles.time}>
                                <span>مبتدی</span>
                            </div>
                            <span className={styles.qty}>10</span>
                        </div>

                        <div className={styles.data}>
                            <div className={styles.time}>
                                <span>مقدماتی</span>
                            </div>
                            <span className={styles.qty}>12</span>
                        </div>

                        <div className={styles.data}>
                            <div className={styles.time}>
                                <span>پیشرفته</span>
                            </div>
                            <span className={styles.qty}>8</span>
                        </div>

                        <div className={styles.data}>
                            <div className={styles.time}>
                                <span>متوسطه</span>
                            </div>
                            <span className={styles.qty}>15</span>
                        </div>
                    </div>

                </div>


                <div className={styles.box_right}>
                    <div className={styles.header_box}>
                        <div className={styles.title_left}>
                            <Gem />
                            <h5>تعداد پرواز</h5>
                        </div>
                        <div><Calendar /> <span>15 آذر 1400</span></div>
                    </div>


                    <div className={styles.listdata_morabi}>
                        <div className={styles.data}>
                            <div className={styles.time}>
                                <span>مبتدی</span>
                            </div>
                            <span className={styles.qty}>5</span>
                        </div>

                        <div className={styles.data}>
                            <div className={styles.time}>
                                <span>مقدماتی</span>
                            </div>
                            <span className={styles.qty}>10</span>
                        </div>

                        <div className={styles.data}>
                            <div className={styles.time}>
                                <span>پیشرفته</span>
                            </div>
                            <span className={styles.qty}>8</span>
                        </div>

                        <div className={styles.data}>
                            <div className={styles.time}>
                                <span>متوسطه</span>
                            </div>
                            <span className={styles.qty}>7</span>
                        </div>
                    </div>

                </div>
            </div>

            <ul className={styles.nav}>
                <li
                    onClick={ShowAll}
                    className={showData ? styles.showsignup : styles.hidesignup}
                >
                    پرواز تفریحی
                </li>
                <li
                    onClick={ShowFun}
                    className={showData ? styles.hidesignup : styles.showsignup}
                >
                    پرواز آزاد
                </li>
            </ul>
            <BodyRecords />
        </>
    );
}

export default AnjomanMorabiSavabegh;