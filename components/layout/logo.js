import styles from './logo.module.css';
import Image from "next/image";
import logo from '../../public/images/logo.png';
import Link from "next/link";

const Logo = () => {
    return (
        <div className={styles.logo}>
            <Link href="/">
                <a>
                    <Image width="200" height="36" src={logo} alt="logo" />
                </a>
            </Link>
        </div>
    )
};

export default Logo;