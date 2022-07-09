import { Fragment, useState } from "react";
import { BsBookmarkStar, BsFillTelephoneFill } from 'react-icons/bs';
import { FaLocationArrow } from 'react-icons/fa';
import { TiPencil } from 'react-icons/ti';
import styles from './signup.module.css';
import UserInput from "../icons/user-input";
import Lock from "../icons/lock";
import Mail from "../icons/mail";
import Button from "../ui/button";
import Timer from "./timer";

const Signup = () => {

    const [verifi, setVerifi] = useState(false);
    const showVerifi = () => setVerifi(true);

    return (
        <Fragment>

            <div className={styles.controllers}>
                <UserInput />
                <input
                    id="username"
                    type="text"
                    name="username"
                    placeholder="نام"
                />
            </div>

            <div className={styles.controllers}>
                <UserInput />
                <input
                    id="username"
                    type="text"
                    name="username"
                    placeholder="نام خانوادگی"
                />
            </div>

            <div className={styles.controllers}>
                <UserInput />
                <input
                    id="username"
                    type="text"
                    name="username"
                    placeholder="نام کاربری"
                />
            </div>

            <div className={styles.controllers}>
                <Lock />
                <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="رمز عبور"
                />
            </div>

            <div className={styles.controllers}>
                <BsFillTelephoneFill />
                <input
                    id="username"
                    type="text"
                    name="username"
                    placeholder="تلفن همراه"
                />
            </div>

            <div className={styles.controllers}>
                <Mail />
                <input
                    id="username"
                    type="email"
                    name="username"
                    placeholder="ایمیل"
                />
            </div>

            <div className={styles.controllers}>
                <FaLocationArrow />
                <select
                    required
                    id="location_Certificate"
                    name="location_Certificate"
                >
                    <option value="" disabled selected hidden>صدور گواهینامه از</option>
                    <option className={styles.options} value="0">هواپیما کشوری</option>
                    <option className={styles.options} value="1">انجمن ورزشهای هوایی</option>
                </select>
            </div>

            <div className={styles.controllers}>
                <BsBookmarkStar />
                <select
                    required
                    id="sec_Certificate"
                    name="sec_Certificate"
                >
                    <option value="10" disabled selected hidden>مقطع گواهینامه</option>
                    <option className={styles.optionss} value="6">مربی</option>
                    <option className={styles.options} value="0">مقدماتی</option>
                    <option className={styles.options} value="1">مبتدی</option>
                    <option className={styles.options} value="2">متوسطه</option>
                    <option className={styles.options} value="3">پیشرفته</option>
                    <option className={styles.options} value="4">تندم</option>
                    <option className={styles.options} value="5">آزاد</option>
                </select>
            </div>

            <div className={styles.controllers}>
                <TiPencil />
                <input
                    id="num_Certificate"
                    type="text"
                    name="num_Certificate"
                    placeholder="شماره گواهینامه"
                />
            </div>

            <Button className={styles['login-btn']} onClick={showVerifi}>
                تایید مشخصات
            </Button>

            {verifi ?
                <>
                    <div className={styles.completp}>
                        <p>جهت تکمیل ثبت نام کد پیامک شده را وارد نمایید </p>
                    </div>
                    <div className={styles.controllers}>
                        <TiPencil />
                        <input
                            id="code"
                            type="text"
                            name="code"
                            placeholder="ثبت کد"
                        />
                        <span className={styles.timer}>
                            <Timer />
                        </span>
                    </div>

                    <Button className={styles['login-btn']} >
                        تایید هویت
                    </Button>
                </>
                : ''
            }

        </Fragment>
    );
};

export default Signup;