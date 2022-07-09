import styles from './login.module.css';
import Link from "next/link";

const Login = () => {
    return (
        <div className={styles.login}>
            <Link href="/auth">
                <button className={styles.btn}>
                    <span className={styles['signup']}>
                        ثبت نام
                    </span>
                    <span className={styles.signup}>
                        /
                    </span>
                    <span className={styles['signup']}>
                        ورود به سامانه
                    </span>
                    <span className={styles['mobile-txt']}>
                        ورود به سامانه
                    </span>
                </button>
            </Link>
        </div>
    );
};

export default Login;