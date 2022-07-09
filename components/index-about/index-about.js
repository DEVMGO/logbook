import styles from './index-about.module.css';
import Image from "next/image";
import imgPath from '../../public/images/old-book.png';
import TitleCard from "../ui/title-card";
import {getAllItems} from "../../data/about-title";
import Button from "../ui/button";
import Pin from "../icons/pin";

const IndexAbout = () => {

    const titleItems = getAllItems();

    return (
        <section className={styles.about}>
            <div className={styles.shape}>
                <Image src={imgPath} layout={"responsive"} alt="digilog book" />
            </div>
            <div className={styles.info}>
                <h2 className={styles.title}>
                    چرا دیجی لاگ
                </h2>
                <p className={styles.book}>
                    بوک
                </p>
                <div className={styles.desc}>
                    <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز است.
                    </p>
                </div>
                <div className={styles['items-wrapper']}>
                    <ul>
                        {titleItems.map((titleItem) => (
                            <li key={titleItem.id}>
                                <TitleCard>
                                    <div className={styles['items-wrapper__box']}>
                                        <Button className={`${styles.btn}`}>
                                            <Pin/>
                                        </Button>
                                        <p>
                                            {titleItem.title}
                                        </p>
                                    </div>
                                </TitleCard>
                            </li>
                        ))}
                    </ul>
                    <Button link="/aboutus">
                        اطلاعات بیشتر
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default IndexAbout;