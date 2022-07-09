import { Fragment, useState } from "react";
import styles from './levels.module.css';
import Medal from '../../icons/medal';
import Gem from '../../icons/gem';
import Button from "../../ui/button";
import { getAllSavabegh } from "../../../data/savabegh_parvaz";

const Levels = (props) => {

    const Savabegh = getAllSavabegh();

    const [showData, setShowData] = useState(null);
    const ToggleShowData = (id) => {
        if (showData === id) {
            return setShowData(null);
        }
        setShowData(id);
    };

    return (
        <Fragment>
            <section className={styles.levels}>

                {Savabegh.map((data) => (
                    <>
                        <div className={styles.title}>
                            <h4>
                                <Medal /> {data.title}
                            </h4>
                        </div>

                        {data.etelaat.map((item) => (

                            <div className={styles.list_level} key={item.id}>
                                <div className={styles.item_level}>
                                    <div className={styles.item}>
                                        <span className={styles.number}>{item.index}</span>
                                        <div className={styles.before_box}>
                                            <div className={styles.box_data}>
                                                <div className={styles.data}>
                                                    <Gem />
                                                    <h3>{item.date}</h3>
                                                    <h3>{item.city}</h3>
                                                    <h3>{item.site}</h3>
                                                </div>
                                                <Button className={showData == item.id ? styles.button_show : styles.button} onClick={() => { ToggleShowData(item.id) }}>
                                                    مشاهده جزئیات
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                {showData == item.id ?
                                    <div className={styles.box_item_data}>
                                        <div className={styles.box_input}>
                                            <div className={styles.input_data}>
                                                <div className={styles.controllers1}>
                                                    <h5 className={styles.h5_data}>مقطع گواهینامه</h5>
                                                    <p>{item.level}</p>
                                                </div>
                                                <div className={styles.controllers1}>
                                                    <h5 className={styles.h5_data}>سرعت باد Takeoff</h5>
                                                    <p>{item.speed_takeoff}</p>
                                                </div>
                                                <div className={styles.controllers1}>
                                                    <h5 className={styles.h5_data}>ساعت Takeoff</h5>
                                                    <p>{item.time_takeoff}</p>
                                                </div>
                                                <div className={styles.controllers1}>
                                                    <h5 className={styles.h5_data}>ساعت لندینگ</h5>
                                                    <p>{item.time_landing}</p>
                                                </div>
                                            </div>

                                            <div className={styles.input_data}>
                                                <div className={styles.controllers1}>
                                                    <h5 className={styles.h5_data}>برند</h5>
                                                    <p>{item.brand}</p>
                                                </div>
                                                <div className={styles.controllers1}>
                                                    <h5 className={styles.h5_data}>جهت باد Takeoff</h5>
                                                    <p>{item.direction_takeoff}</p>
                                                </div>
                                                <div className={styles.controllers1}>
                                                    <h5 className={styles.h5_data}>سرعت باد Landing</h5>
                                                    <p>{item.speed_landing}</p>
                                                </div>
                                                <div className={styles.controllers1}>
                                                    <h5 className={styles.h5_data}>نوع پوشش ابری</h5>
                                                    <p>{item.type_cloud}</p>
                                                </div>
                                            </div>

                                            <div className={styles.input_data}>
                                                <div className={styles.controllers1}>
                                                    <h5 className={styles.h5_data}>مدل/کلاس</h5>
                                                    <p>{item.model}</p>
                                                </div>
                                                <div className={styles.controllers1}>
                                                    <h5 className={styles.h5_data}>شیوه Takeoff</h5>
                                                    <p>{item.style_takeoff}</p>
                                                </div>
                                                <div className={styles.controllers1}>
                                                    <h5 className={styles.h5_data}>جهت باد Landing</h5>
                                                    <p>{item.direction_landing}</p>
                                                </div>
                                                <div className={styles.controllers1}>
                                                    <h5 className={styles.h5_data}>مدت زمان پرواز</h5>
                                                    <p>{item.time_fly} ساعت</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.box_text}>
                                            <span>توضیحات و مانورها</span>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                    :
                                    ''
                                }

                            </div>

                        ))
                        }
                    </>

                ))
                }
            </section>
        </Fragment>
    );
};

export default Levels;