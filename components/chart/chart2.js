import styles from './chart2.module.css';
import { getKhalabans } from "../../data/khalaban";

const Chart2 = () => {

    const Khalabans = getKhalabans();

    return (
        <>
            <div className={styles.chart2}>
                {Khalabans.map((item) => (
                    <div className={styles.bodychart} key={item.id}>
                        <span>{item.subset.length}</span>
                        <div className={styles.chart} style={{height: `${item.subset.length}0px`}}></div>
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Chart2;
