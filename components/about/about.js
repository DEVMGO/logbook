import {Fragment} from "react";
import styles from './about.module.css';
// import imgPath from '../../public/images/about.jpg';
import Image from "next/image";

const About = () => {
    return (
        <Fragment>
            <section className={styles.about}>
                <div>
                    {/* <Image src={imgPath} alt="about image" layout={"fill"} /> */}
                </div>
                <div>
                    <h2>
                        درباره دیجی لاگ بوک
                    </h2>
                    <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.
                    </p>
                </div>
            </section>
        </Fragment>
    )
};

export default About;