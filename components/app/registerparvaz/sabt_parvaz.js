import { GiPaperPlane } from 'react-icons/gi';
import React, { useContext } from "react";
import { ThemeContext, THEME_TYPE } from '../../auth/themprovider';
import Button from '../../ui/button';
import styles from './sabt_parvaz.module.css';

const Sabt_Parvaz = () => {

    const { themeMode } = useContext(ThemeContext)

    return (
        <>
            <div className={styles.sabt_parvaz}>
                <div className={styles.parvaz}>
                    <div className={styles.controllers}>
                        <label htmlFor="number_parvaz">شماره پرواز</label>
                        <input
                            id="number_parvaz"
                            type="text"
                            name="number_parvaz"
                            className={styles.number_parvaz}
                        />
                    </div>
                    <div className={styles.controllers}>
                        <label htmlFor="date_parvaz">تاریخ پرواز</label>
                        <input
                            id="date_parvaz"
                            type="date"
                            name="date_parvaz"
                            value="2013-01-08"
                            className={styles.date_parvaz}
                        />
                    </div>
                    <div className={styles.controllers}>
                        <label htmlFor="certificate">مقطع گواهینامه</label>
                        <input
                            id="certificate"
                            type="text"
                            name="certificate"
                            className={styles.certificate}
                        />
                    </div>
                </div>

                <div className={styles.databall}>
                    <span>مشخصات بال</span>
                    <p></p>
                </div>

                <div className={styles.controllerss}>
                    <label>انتخاب بال</label>
                    <select
                        required
                        id="select_ball"
                        name="select_ball"
                    >
                        <option className={styles.options} value="0"></option>
                        <option className={styles.options} value="1">TEST</option>
                        <option className={styles.options} value="2" >صدور گواهینامه از</option>
                    </select>
                </div>

                <div className={styles.controllers}>
                    <label htmlFor="class_ball">کلاس بال</label>
                    <input
                        id="class_ball"
                        type="text"
                        name="class_ball"
                        className={styles.class_ball}
                    />
                </div>

                <div className={styles.controllers}>
                    <label htmlFor="brand_ball">برند بال</label>
                    <input
                        id="brand_ball"
                        type="text"
                        name="brand_ball"
                        className={styles.brand_ball}
                    />
                </div>

                <div className={styles.controllers}>
                    <label htmlFor="model_ball">مدل بال</label>
                    <input
                        id="model_ball"
                        type="text"
                        name="model_ball"
                        className={styles.model_ball}
                    />
                </div>

                <div className={styles.location_fly}>
                    <span>لوکیشن و شرایط پرواز</span>
                    <p></p>
                </div>

                <div className={styles.controllerss}>
                    <label>شهر</label>
                    <select
                        required
                        id="city"
                        name="city"
                    >
                        <option className={styles.options} value="0"></option>
                        <option className={styles.options} value="1">تهران</option>
                        <option className={styles.options} value="2" >مشهد</option>
                    </select>
                </div>

                <div className={styles.controllerss}>
                    <label>آدرس سایت</label>
                    <select
                        required
                        id="address_site"
                        name="address_site"
                    >
                        <option className={styles.options} value="0"></option>
                        <option className={styles.options} value="1">شهید عسگری</option>
                        <option className={styles.options} value="2" >مهرآباد</option>
                    </select>
                </div>

                <div className={styles.controllerss}>
                    <label>نوع پوشش ابری</label>
                    <select
                        required
                        id="weather"
                        name="weather"
                    >
                        <option className={styles.options} value="0"></option>
                        <option className={styles.options} value="1">CUMULOS</option>
                        <option className={styles.options} value="2" >SUNNY</option>
                    </select>
                </div>

                <div className={styles.controllerss}>
                    <label>نوع پرواز</label>
                    <select
                        required
                        id="type_fly"
                        name="type_fly"
                    >
                        <option className={styles.options} value="0"></option>
                        <option className={styles.options} value="1">مقدماتی</option>
                        <option className={styles.options} value="2" >مبتدی</option>
                        <option className={styles.options} value="2" >تندم</option>
                    </select>
                </div>

                <div className={styles.databall}>
                    <span>Takeoff</span>
                    <p></p>
                </div>

                <div className={styles.controllers}>
                    <label htmlFor="time_takeoff">زمان Takeoff</label>
                    <input
                        id="time_takeoff"
                        type="text"
                        name="time_takeoff"
                        className={styles.time_takeoff}
                    />
                </div>

                <div className={styles.controllers}>
                    <label htmlFor="method_takeoff">شیوه Takeoff</label>
                    <input
                        id="method_takeoff"
                        type="text"
                        name="method_takeoff"
                        className={styles.method_takeoff}
                    />
                </div>

                <div className={styles.controllers}>
                    <label htmlFor="speed_takeoff">سرعت باد Takeoff</label>
                    <input
                        id="speed_takeoff"
                        type="text"
                        name="speed_takeoff"
                        className={styles.speed_takeoff}
                    />
                </div>

                <div className={styles.controllers}>
                    <label htmlFor="jahat_takeoff">جهت باد Takeoff</label>
                    <input
                        id="jahat_takeoff"
                        type="text"
                        name="jahat_takeoff"
                        className={styles.jahat_takeoff}
                    />
                </div>

                <div className={styles.databall}>
                    <span>Landing</span>
                    <p></p>
                </div>

                <div className={styles.controllers}>
                    <label htmlFor="time_landing">زمان Landing</label>
                    <input
                        id="time_landing"
                        type="text"
                        name="time_landing"
                        className={styles.time_landing}
                    />
                </div>

                <div className={styles.controllers}>
                    <label htmlFor="speed_landing">سرعت باد Landing</label>
                    <input
                        id="speed_landing"
                        type="text"
                        name="speed_landing"
                        className={styles.speed_landing}
                    />
                </div>

                <div className={styles.controllers}>
                    <label htmlFor="jahat_landing">جهت باد Landing</label>
                    <input
                        id="jahat_landing"
                        type="text"
                        name="jahat_landing"
                        className={styles.jahat_landing}
                    />
                </div>

                <div
                    style={{ display: themeMode == THEME_TYPE.KHALABAN ? 'flex' : 'none' }}
                    className={`${styles.controllers}`}>
                    <label htmlFor="time_fly">زمان پرواز</label>
                    <input
                        id="time_fly"
                        type="text"
                        name="time_fly"
                        className={styles.time_fly}
                    />
                </div>

                <div
                    style={{ display: themeMode == THEME_TYPE.ADMIN || themeMode == THEME_TYPE.MORABI ? 'flex' : 'none' }}
                    className={`${styles.locationfly} ${styles.titletozih}`}>
                    <span>توضیحات و مانورها</span>
                    <p></p>
                </div>

                <div
                    style={{ display: themeMode == THEME_TYPE.ADMIN || themeMode == THEME_TYPE.MORABI ? 'flex' : 'none' }}
                    className={styles.description}>
                    <p>
                        لورم  ایپسوم  متن  ساختگی  با  تولید  سادگی  نامفهوم  از  صنعت
                        چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
                        و مجلهدر ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی
                        موردنیاز  و  کاربردهای  متنوع  با  هدف  بهبود  بزارهای کاربردی  می  باشد
                    </p>
                </div>

                <div
                    style={{ display: themeMode == THEME_TYPE.ADMIN ? 'flex' : 'none' }}
                    className={`${styles.controllers}`}>
                    <label htmlFor="pasanger_phone">شماره تماس پسنجر</label>
                    <input
                        id="pasanger_phone"
                        type="phone"
                        name="pasanger_phone"
                        className={styles.pasanger_phone}
                    />
                </div>

                <Button className={styles['login-btn']} >
                    <GiPaperPlane /> <span>ثبت پرواز</span>
                </Button>

            </div>
        </>
    );
}

export default Sabt_Parvaz;