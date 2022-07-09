import Image from "next/image";
import {Fragment} from "react";
import styles from './post-summary.module.css';

const PostSummary = (props) => {

    const {title,image, date} = props;
    const humanReadableTime = new Date(date).toLocaleDateString('fa-IR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    return (
        <Fragment>
            <div className={styles['img-wrapper']}>
                {/* <Image src={`/${image}`} alt={title} layout={"fill"} /> */}
            </div>
            <h2 className={styles.title}>
                {title}
            </h2>
            <time className={styles.time}>
                {humanReadableTime}
            </time>
        </Fragment>
    );
};

export default PostSummary;