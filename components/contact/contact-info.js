import {Fragment} from "react";
import ContactTel from "../icons/contact-tel";
import ContactMail from "../icons/contact-mail";
import {getAllSocial} from "../../data/social";
import styles from './contact-info.module.css';

const ContactInfo = () => {

    const socials = getAllSocial();

    return (
        <Fragment>
            <div className={`col-2 ${styles['left-box']}`}></div>
            <div className={`col-8 ${styles['center-box']}`}>
                <h2>
                    راه های ارتباطی
                </h2>
                <div className={styles.link}>
                  <span>
                  <ContactTel/>
              </span>
                    <a href="tel:02188724330">
                        021-88724330
                    </a>
                </div>
                <div className={styles.link}>
                    <span>
                  <ContactMail/>
              </span>
                    <a href="mailto:info@digilogbook.com">
                        info@digilogbook.com
                    </a>
                </div>
                <ul>
                    {socials.map((social) => (
                        <li key={social.id}>
                            <a href={social.link}>
                                <i className={social.icon}></i>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={`col-2 ${styles['right-box']}`}></div>
        </Fragment>
    );
};

export default ContactInfo;