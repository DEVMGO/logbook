import {Fragment} from "react";
import styles from './footer.module.css';
import Social from "./social";
import Navigation from "./navigation";
import Logo from "./logo";
import Contact from "./contact";
import Button from "../ui/button";
import TitleCard from "../ui/title-card";

const Footer = () => {

    const submitHandler = (event) => {
      event.preventDefault();
    };

    return (
      <Fragment>
          <div className={styles.footer}>
              <TitleCard>
                  <div className={`${styles['footer-wrapper']}`}>
                      <div className={`${styles['footer-wrapper__info']}`}>
                          <Social/>
                          <div className={`${styles['nav-m']} ${styles['order-1']}`}>
                              <Navigation/>
                          </div>
                          <div className={`${styles.logo}`}>
                              <Logo/>
                          </div>
                          <div className={`${styles['order-1']}`}>
                              <Contact/>
                          </div>
                      </div>
                      <div className={`${styles['footer-wrapper__newsletter']}`}>
                          <h2>
                              عضویت در خبرنامه
                          </h2>
                          <p>
                              ما هرزنامه ارسال نمی کنیم، پس نگران نباشید
                          </p>

                          <div className={`${styles.controls}`}>
                              <input type="email" placeholder="ایمیل خود را وارد کنید" />
                              <Button className={`${styles.btn}`} onClick={submitHandler}>
                                  ارسال
                              </Button>
                          </div>

                      </div>
                  </div>
              </TitleCard>
              <p className={`${styles['copy-right']}`}>
                  طراحی و اجرا توسط
                  <a href="https://faramouj.ir">
                      فراموج
                  </a>
              </p>
          </div>
      </Fragment>
    );
};

export default Footer;