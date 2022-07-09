import styles from './contact.module.css';
import ContactInfo from "./contact-info";
import ContactForm from "./contact-form";
import TitleCard from "../ui/title-card";

const Contact = () => {
    return (
        <section className={styles.contact}>
            <div className={`${styles['contact-wrapper']}`}>
                <TitleCard>
                    <div className={`col-6 ${styles['right-box']}`}>
                        <ContactInfo/>
                    </div>
                </TitleCard>
                <div className={`col-6 ${styles['left-box']}`}>
                    <ContactForm/>
                </div>
            </div>
        </section>
    )
};

export default Contact;