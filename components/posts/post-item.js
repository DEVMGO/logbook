import styles from "./post-item.module.css";
import Image from "next/image";
import Link from "next/link";
import Arrow from "../icons/arrow";
import ButtonArrow from "../ui/button-arrow";
import TitleCard from "../ui/title-card";

const PostItem = (props) => {

    const {id, title, description, image} = props;
    const excerpt = description.slice(0,350)+'...';
    const imgPath = `/${image}`;
    const link = `blog/${id}`;

    return (
        <li className={`${styles.items}`}>
            <div>
                <div className={`${styles['item-wrapper']}`}>
                    <div className={`${styles['img-wrapper']}`}>
                        {/* <Link href={link}>
                            <Image src={imgPath} alt={title} layout="fill" />
                        </Link> */}
                    </div>
                    <TitleCard>
                        <div className={`${styles.info}`}>
                            <Link href={link}>
                                <h2>
                                    {title}
                                </h2>
                            </Link>
                            <p>
                                {excerpt}
                            </p>
                            <ButtonArrow link={link}>
                                ادامه مطلب
                            </ButtonArrow>
                        </div>
                    </TitleCard>
                </div>
            </div>
        </li>
    );
};

export default PostItem;