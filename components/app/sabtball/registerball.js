import { Fragment, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Image from "next/image";
import styles from './registerball.module.css';
import Button from "../../ui/button";
import ImageUser from "../../../public/images/profile.png";

const RegisterBall = () => {

    const [ballList, setBallList] = useState([]);

    const [newBall, setNewBall] = useState({
        location: '',
        model_device: '',
        class_device: '',
        serial_ball: '',
        photo_id: '',
        brand_chatr: '',
        model_chatr: '',
        size_chatr: '',
        date_last:'',
        register_serial: '',
        photo_chatr: '',
        brand_harnes: '',
        model_harnes: '',
        size_harnes: '',
        register_serial_harnes: '',
        photo_harnes: '',
        id: 0,
    })

    const addNewBall = () => {
        if (newBall.location) {
            setBallList([...ballList, newBall]);
            setNewBall({
                location: '',
                model_device: '',
                class_device: '',
                serial_ball: '',
                photo_id: '',
                brand_chatr: '',
                model_chatr: '',
                size_chatr: '',
                register_serial: '',
                photo_chatr: '',
                brand_harnes: '',
                model_harnes: '',
                size_harnes: '',
                register_serial_harnes: '',
                photo_harnes: '',
                id: 0

            })
        }
    }

    return (
        <Fragment>
            <section className={styles.auth}>
                <div className={styles.tab}>
                    <div className={styles.box_image_user}>
                        <Image src={ImageUser} className={styles.image_user} alt="user" />
                    </div>

                    <h2>ثبت مشخصات بال</h2>

                    <div className={styles.controllers}>
                        <select
                            required
                            id="location_Certificate"
                            name="location_Certificate"
                            value={newBall.location}
                            onChange={(e) => setNewBall({
                                ...newBall,
                                location: e.target.value,
                                id: uuidv4(),
                            })}
                        >
                            <option value="" disabled selected hidden>انتخاب نوع وسیله پروازی</option>
                            <option className={styles.options} >هواپیما کشوری</option>
                            <option className={styles.options} >انجمن ورزشهای هوایی</option>
                        </select>
                    </div>

                    <div className={styles.controllers}>
                        <select
                            required
                            id="model_device"
                            name="model_device"
                            value={newBall.model_device}
                            onChange={(e) => setNewBall({
                                ...newBall,
                                model_device: e.target.value
                            })}
                        >
                            <option value="" disabled selected hidden>مدل وسیله پروازی</option>
                            <option className={styles.options} >هواپیما کشوری</option>
                            <option className={styles.options} >انجمن ورزشهای هوایی</option>
                        </select>
                    </div>

                    <div className={styles.controllers}>
                        <select
                            required
                            id="class_device"
                            name="class_device"
                            value={newBall.class_device}
                            onChange={(e) => setNewBall({
                                ...newBall,
                                class_device: e.target.value
                            })}
                        >
                            <option value="" disabled selected hidden>کلاس وسیله پروازی</option>
                            <option className={styles.options} >هواپیما کشوری</option>
                            <option className={styles.options} >انجمن ورزشهای هوایی</option>
                        </select>
                    </div>

                    <div className={styles.controllers}>
                        <input
                            id="serial_ball"
                            type="text"
                            name="serial_ball"
                            placeholder="ثبت سریال بال (اختیاری)"
                            value={newBall.serial_ball}
                            onChange={(e) => setNewBall({
                                ...newBall,
                                serial_ball: e.target.value
                            })}
                        />
                    </div>

                    <p>
                        با پرکردن این فیلد و سینک سریال بال به خلبان مربوطه ،
                        در صورت اعالممفقودی بال امکان ثبت سریال بال به خلبان  دیگری  نمی باشد،
                        مگر به صورت فروش یا انتقال و ثبت سریال به مالک جدید بال
                    </p>

                    <div className={styles.controll_upload}>
                        <span>عکس شناسه بال</span>
                        <input
                            id="photo_id"
                            type="file"
                            name="photo_id"
                            placeholder="عکس شناسه بال"
                            value={newBall.photo_id}
                            onChange={(e) => setNewBall({
                                ...newBall,
                                photo_id: e.target.value
                            })}
                        />
                        <button>آپلود فایل</button>
                    </div>

                    <p className={styles.forget}>فرمت های مجاز آپلود jpeg,png,jpg</p>

                    <hr />


                    <h2>ثبت مشخصات چتر کمکی</h2>

                    <div className={styles.controllers}>
                        <select
                            required
                            id="brand_chatr"
                            name="brand_chatr"
                            value={newBall.brand_chatr}
                            onChange={(e) => setNewBall({
                                ...newBall,
                                brand_chatr: e.target.value
                            })}
                        >
                            <option value="" disabled selected hidden>برند چتر کمکی</option>
                            <option className={styles.options} >هواپیما کشوری</option>
                            <option className={styles.options} >انجمن ورزشهای هوایی</option>
                        </select>
                    </div>

                    <div className={styles.controllers}>
                        <select
                            required
                            id="model_chatr"
                            name="model_chatr"
                            value={newBall.model_chatr}
                            onChange={(e) => setNewBall({
                                ...newBall,
                                model_chatr: e.target.value
                            })}
                        >
                            <option value="" disabled selected hidden>مدل چتر کمکی</option>
                            <option className={styles.options} >هواپیما کشوری</option>
                            <option className={styles.options} >انجمن ورزشهای هوایی</option>
                        </select>
                    </div>

                    <div className={styles.controllers}>
                        <input
                            id="size_chatr"
                            type="text"
                            name="size_chatr"
                            placeholder="سایز چتر کمکی"
                            value={newBall.size_chatr}
                            onChange={(e) => setNewBall({
                                ...newBall,
                                size_chatr: e.target.value
                            })}
                        />
                    </div>

                    <div className={styles.controll_date}>
                        <span>تاریخ آخرین بسته بندی مجدد</span>
                        <input
                            id="date_last"
                            type="date_last"
                            name="date_last"
                            placeholder="تاریخ آخرین بسته بندی مجدد"
                            value="2022-04-04"
                            // value={newBall.date_last}
                            onChange={(e) => setNewBall({
                                ...newBall,
                                date_last: e.target.value
                            })}
                        />
                    </div>

                    <div className={styles.controllers}>
                        <input
                            id="register_serial"
                            type="text"
                            name="register_serial"
                            placeholder="ثبت سریال چتر کمکی (اختیاری)"
                            value={newBall.register_serial}
                            onChange={(e) => setNewBall({
                                ...newBall,
                                register_serial: e.target.value
                            })}
                        />
                    </div>

                    <p>
                        با پرکردن این فیلد و سینک سریال کمکی به خلبان مربوطه ،
                        در صورت اعالممفقودی کمکی امکان ثبت سریال کمکی به خلبان  دیگری نمی باشد،
                        مگر به صورت فروش یا انتقال و ثبت سریال به مالک جدید کمکی
                    </p>

                    <div className={styles.controll_upload}>
                        <span>عکس چتر کمکی</span>
                        <input
                            id="photo_chatr"
                            type="file"
                            name="photo_chatr"
                            placeholder="عکس چتر کمکی"
                            value={newBall.photo_chatr}
                            onChange={(e) => setNewBall({
                                ...newBall,
                                photo_chatr: e.target.value
                            })}
                        />
                        <button>آپلود فایل</button>
                    </div>

                    <p className={styles.forget}>فرمت های مجاز آپلود jpeg,png,jpg</p>

                    <hr />


                    <h2>ثبت مشخصات هارنس</h2>

                    <div className={styles.controllers}>
                        <select
                            required
                            id="brand_harnes"
                            name="brand_harnes"
                            value={newBall.brand_harnes}
                            onChange={(e) => setNewBall({
                                ...newBall,
                                brand_harnes: e.target.value
                            })}
                        >
                            <option value="" disabled selected hidden>برند هارنس</option>
                            <option className={styles.options} >هواپیما کشوری</option>
                            <option className={styles.options} >انجمن ورزشهای هوایی</option>
                        </select>
                    </div>

                    <div className={styles.controllers}>
                        <select
                            required
                            id="model_harnes"
                            name="model_harnes"
                            value={newBall.model_harnes}
                            onChange={(e) => setNewBall({
                                ...newBall,
                                model_harnes: e.target.value
                            })}
                        >
                            <option value="" disabled selected hidden>مدل هارنس</option>
                            <option className={styles.options} >هواپیما کشوری</option>
                            <option className={styles.options} >انجمن ورزشهای هوایی</option>
                        </select>
                    </div>

                    <div className={styles.controllers}>
                        <input
                            id="size_harnes"
                            type="text"
                            name="size_harnes"
                            placeholder="سایز هارنس"
                            value={newBall.size_harnes}
                            onChange={(e) => setNewBall({
                                ...newBall,
                                size_harnes: e.target.value
                            })}
                        />
                    </div>

                    <div className={styles.controllers}>
                        <input
                            id="register_serial_harnes"
                            type="text"
                            name="register_serial_harnes"
                            placeholder="ثبت سریال هارنس (اختیاری)"
                            value={newBall.register_serial_harnes}
                            onChange={(e) => setNewBall({
                                ...newBall,
                                register_serial_harnes: e.target.value
                            })}
                        />
                    </div>

                    <p>
                        با پرکردن این فیلد و سینک سریال کمکی به خلبان مربوطه ،
                        در صورت اعالممفقودی کمکی امکان ثبت سریال کمکی به خلبان  دیگری نمی باشد،
                        مگر به صورت فروش یا انتقال و ثبت سریال به مالک جدید کمکی
                    </p>

                    <div className={styles.controll_upload}>
                        <span>عکس هارنس</span>
                        <input
                            id="photo_harnes"
                            type="file"
                            name="photo_harnes"
                            placeholder="عکس هارنس"
                            value={newBall.photo_harnes}
                            onChange={(e) => setNewBall({
                                ...newBall,
                                photo_harnes: e.target.value
                            })}
                        />
                        <button>آپلود فایل</button>
                    </div>

                    <p className={styles.forget}>فرمت های مجاز آپلود jpeg,png,jpg</p>


                    <Button className={styles['login-btn']} onClick={addNewBall}>
                        تایید مشخصات
                    </Button>

                </div>
            </section>
        </Fragment>
    );
}

export default RegisterBall;