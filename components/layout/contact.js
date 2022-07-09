import styles from './contact.module.css';
import Link from "next/link";

const Contact = () => {
    return (
        <div className={`${styles.contact}`}>
            <ul>
                <li>
                    <a href="mailto:info@digilogbook.com">
                        <i className="fa fa-envelope"></i>
                        info@digilogbook.com
                    </a>
                </li>
                <li>
                    <a href="tel:02188724330">
                        <i className="fa fa-phone-alt"></i>
                        021-88724330
                    </a>
                </li>
            </ul>
        </div>
    )
};

export default Contact;