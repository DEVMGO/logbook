import styles from './contact-form.module.css';
import {Fragment} from "react";
import UserInput from "../icons/user-input";
import ContactMail from "../icons/contact-mail";
import Button from "../ui/button";

const ContactForm = () => {

    const submitHandler = (event) => {
      event.preventDefault();
    };

    return (
        <Fragment>
            <div className={styles['form-wrapper']}>
                <h2>
                    نظرات خود را با ما در میان بگذارید
                </h2>
                <form className={styles.form}>
                    <div className={styles.controls}>
                        <span>
                            <UserInput/>
                        </span>
                        <input type="text" placeholder="نام" />
                    </div>
                    <div className={styles.controls}>
                        <span>
                            <ContactMail/>
                        </span>
                        <input type="email" placeholder="ایمیل" />
                    </div>
                    <div className={styles.controls}>
                        <textarea placeholder="نظر شما...">

                        </textarea>
                    </div>
                    <div className={styles.actions}>
                        <Button onClick={submitHandler}>
                            ارسال
                        </Button>
                    </div>
                </form>
            </div>
        </Fragment>
    );
};

export default ContactForm;