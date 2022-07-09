import styles from "./process-item.module.css";
import Image from "next/image";

const ProcessItem = (props) => {

    const {id, title, description, image} = props;
    const imgPath = `/${image}`;

    return (
        <li className={styles.items}>
            <div className={styles.box}>
                <Image src={imgPath} layout={"fill"} alt={title} />
                <h2>
                    {title}
                </h2>
                <p>
                    {description}
                </p>
            </div>
        </li>
    );
};

export default ProcessItem;