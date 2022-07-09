import {Fragment} from "react";
import styles from './app-home.module.css';
import Link from "next/link";
import Image from "next/image";
import toolsImg from '../../public/images/app-home/tools.png';
import syllabusImg from '../../public/images/app-home/syllabus.png';
import blogImg from '../../public/images/app-home/blog.png';
import supportImg from '../../public/images/app-home/support.png';

const AppHome = () => {
    return (
      <Fragment>
          <section className={`${styles['items-wrapper']}`}>
              <div className={`${styles.items}`}>
                  <span className={`${styles.icon}`}>
                      <Image src={toolsImg} alt="tools icon" layout={"fill"} />
                  </span>
                  <Link href="/app/sabtball">
                      <a>
                          ثبت تجهیزات جدید
                      </a>
                  </Link>
              </div>
              <div className={`${styles.items}`}>
                  <span className={`${styles.icon}`}>
                      <Image src={syllabusImg} alt="tools icon" layout={"fill"} />
                  </span>
                  <Link href="#">
                      <a>
                          سیلابس آموزشی
                      </a>
                  </Link>
              </div>
              <div className={`${styles.items}`}>
                  <span className={`${styles.icon}`}>
                      <Image src={blogImg} alt="tools icon" layout={"fill"} />
                  </span>
                  <Link href="/blog">
                      <a>
                          مقالات
                      </a>
                  </Link>
              </div>
              <div className={`${styles.items}`}>
                  <span className={`${styles.icon}`}>
                      <Image src={supportImg} alt="tools icon" layout={"fill"} />
                  </span>
                  <Link href="#">
                      <a href="tel: 09121111111">
                          پشتیبانی
                      </a>
                  </Link>
              </div>
          </section>
      </Fragment>
    );
};

export default AppHome;