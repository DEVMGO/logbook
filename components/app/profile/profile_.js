import styles from './profile.module.css'
import Image from "next/image";
import { Fragment, useState } from "react";
import { FaLocationArrow } from 'react-icons/fa';
import { TiPencil } from 'react-icons/ti';
import { BsBookmarkStar, BsFillTelephoneFill } from 'react-icons/bs';
import UserInput from "../../icons/user-input";
import Lock from "../../icons/lock";
import Mail from "../../icons/mail";
import Edit from "../../icons/edit";
import Button from "../../ui/button";
import ImageUser from "../../../public/images/profile.png";

const Profile_ = () => {

    return (
        <>
            <section className={styles.profile}>
                <div className={styles.tab}>

                    <div className={styles.box_image_user}>
                        <Image src={ImageUser} className={styles.image_user} alt="user" />
                        <div className={styles.box_upload}>
                            <button className={styles.btn_upload}>+</button>
                            <input type="file" />
                        </div>
                    </div>

                    <div className={styles.controllers}>
                        <UserInput />
                        <input
                            id="username"
                            type="text"
                            name="username"
                            placeholder="نام"
                            defaultValue="محمود"
                        />
                        <Edit />
                    </div>

                    <div className={styles.controllers}>
                        <UserInput />
                        <input
                            id="username"
                            type="text"
                            name="username"
                            placeholder="نام خانوادگی"
                            defaultValue="شیرازی نیا"
                        />
                        <Edit />
                    </div>

                    <div className={styles.controllers}>
                        <UserInput />
                        <input
                            id="username"
                            type="text"
                            name="username"
                            placeholder="نام کاربری"
                            defaultValue="محمود شیرازی نیا"
                        />
                        <Edit />
                    </div>

                    <div className={styles.controllers}>
                        <Lock />
                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="رمز عبور"
                            defaultValue="123456789"
                        />
                        <Edit />
                    </div>

                    <div className={styles.controllers}>
                        <BsFillTelephoneFill />
                        <input
                            id="username"
                            type="text"
                            name="username"
                            placeholder="تلفن همراه"
                            defaultValue="09121111212"
                        />
                        <Edit />
                    </div>

                    <div className={styles.controllers}>
                        <Mail />
                        <input
                            id="username"
                            type="email"
                            name="username"
                            placeholder="ایمیل"
                            defaultValue="shirazinia@gmail.com"
                        />
                        <Edit />
                    </div>

                    <div className={styles.controllers}>
                        <BsBookmarkStar />
                        <input
                            disabled
                            id="sec_Certificate"
                            name="sec_Certificate"
                            type="text"
                            placeholder="مقطع گواهینامه"
                            value="پیشرفته"
                        />
                    </div>

                    <div className={styles.controllers}>
                        <TiPencil />
                        <input
                            disabled
                            id="num_Certificate"
                            type="text"
                            name="num_Certificate"
                            placeholder="شماره گواهینامه"
                            value="12345678900987654321"
                        />
                    </div>

                    <div className={styles.controllers}>
                        <FaLocationArrow />
                        <input
                            disabled
                            type="text"
                            id="location_Certificate"
                            name="location_Certificate"
                            placeholder="صدور گواهینامه از"
                            value="هواپیما کشوری"
                        />
                    </div>

                    <Button className={styles['login-btn']}>
                        تایید مشخصات
                    </Button>

                </div>
            </section>
        </>
    );
}

export default Profile_;