import Image from "next/image";
import styles from './bodyrecords.module.css';
import Map from '../../../public/images/world_map.svg';
import Chart from '../../icons/chart';
import Time from '../../icons/time';
import Calendar from '../../icons/calendar';
import Location from '../../icons/location';
import Gps from '../../icons/gps';
import Filter from '../../icons/filter';
import Button from "../../ui/button";
import Levels from "./levels";

const BodyRecords = () => {
    return (
        <>
            <section className={styles.bodyrecords}>
                <div className={styles.box_map}>
                    <div className={styles.box_image}>
                        <Image src={Map} alt="image" layout="fill" />
                    </div>
                    <div className={styles.box_datafly}>
                        <div className={styles.box_itemdata}>
                            <div className={styles.itemdata}>
                                <Chart /> <h5>تعداد پرواز</h5>
                            </div>
                            <h5>40</h5>
                        </div>

                        <div className={styles.box_itemdata}>
                            <div className={styles.itemdata}>
                                <Time /> <h5>ساعات پرواز</h5>
                            </div>
                            <h5>45</h5>
                        </div>

                        <div className={styles.box_itemdata}>
                            <div className={styles.itemdata}>
                                <Calendar /> <h5>تاریخ آخرین Repack</h5>
                            </div>
                            <h5>20 آذر 1400</h5>
                        </div>
                    </div>
                </div>

                <div className={styles.submit_body}>

                    <div className={styles.controllers}>
                        <label htmlFor="date">تاریخ</label>
                        <div className={styles.box_input}>
                            <input
                                id="date"
                                type="date"
                                name="date"
                                className={styles.input}
                            />
                        </div>
                    </div>

                    <div className={styles.controllers}>
                        <label htmlFor="city">شهر</label>
                        <div className={styles.box_input}>
                            <Location />
                            <select
                                required
                                id="city"
                                name="city"
                                className={styles.select_city}
                            >
                                <option value="" className={styles.options}>تهران(تهران)</option>
                                <option className={styles.options} value="0">خراسان رضوی (مشهد)</option>
                                <option className={styles.options} value="1">فارس (شیراز)</option>
                            </select>
                        </div>
                    </div>

                    <div className={styles.controllers}>
                        <label htmlFor="location_Certificate">سایت</label>
                        <div className={styles.box_inputs}>
                            <div className={styles.item_box_input}>
                                <Gps />
                                <select
                                    required
                                    id="location_Certificate"
                                    name="location_Certificate"
                                    className={styles.select_location}
                                >
                                    <option value="" className={styles.options}>Vardavard</option>
                                    <option className={styles.options} value="0">Mehrabad</option>
                                    <option className={styles.options} value="1">Shahid Asgari</option>
                                </select>
                            </div>
                            <Button className={styles.button}>
                                <Filter /> <span>اعمال تغییرات</span>
                            </Button>
                        </div>
                    </div>

                </div>

                <Levels />

            </section>
        </>
    );
}

export default BodyRecords;