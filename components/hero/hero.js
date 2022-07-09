import styles from './hero.module.css';
import Button from "../ui/button";
import Image from "next/image";
import imgPath from '../../public/images/mobile.png';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles['hero-info']}>
                <div>
                    <h2 className={styles.title}>
                        سامانه ثبت اطلاعات و پرواز های روزانه
                    </h2>
                    <p className={styles.desc}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.
                    </p>
                </div>
                <div className={styles.actions}>
                    <Button link="/auth">
                        <p>
                            ثبت نام در سامانه
                        </p>
                    </Button>
                    <Button link="/aboutus">
                      <p>
                          درباره دیجی لاگ بوک
                      </p>
                    </Button>
                </div>
            </div>
            <div className={styles['hero-img']}>
                <div className={`col-2 ${styles['col-right']}`}></div>
                <div className={`col-8 ${styles.circle}`}>
                    <div className={styles['mobile-wrapper']}>
                        <Image src={imgPath} layout={"fill"} />
                    </div>
                </div>
                <div className={`col-2 ${styles['col-left']}`}></div>
            </div>
        </section>
    )
};

export default Hero;