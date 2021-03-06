import { useState } from "react";
import styles from './anjomanbody.module.css';
import Gem from "../../icons/gem";
import Hat2 from "../../icons/hat2";
import Calendar from "../../icons/calendar";
import Chart2 from "../../chart/chart2";
import IranMap from "../iranmap/IranMap";
import iranProvinces from "../../../data/iranProvinces";


const AnjomanBody = (props) => {

    const [showData, setShowData] = useState(true);
    const ShowAll = () => setShowData(true);
    const ShowFun = () => setShowData(false);

    const [showCity, setShowCity] = useState(true);
    const ShowShahr = () => setShowCity(true);
    const HideShahr = () => setShowCity(false);

    const [provinces] = useState(() => iranProvinces);

    const [citys, setCitys] = useState();

    const Sitecity = (e) => {
        setCitys(e.target.value);
        const [filteredSite] = provinces.filter((item) => item.name === e.target.value);
        setCurrentSite(filteredSite.sites);
    }

    const [currentSite, setCurrentSite] = useState([
        {
            id: 'sit20',
            name: 'Vardavrd ( 812 M )',
            flys: 40,
        },
        {
            id: 'sit21',
            name: 'Shahran ( peak ) ( 755 M )',
            flys: 50,
        },
        {
            id: 'sit22',
            name: 'Emamzadeh Hashem ( Damavand ) ( 442 M )',
            flys: 70,
        },
        {
            id: 'sit23',
            name: 'Shirvan ( 812 M )',
            flys: 35,
        },
    ]);


    return (
        <>
            <section className={styles.anjoman}>
                <div className={styles.tab}>
                    <div className={styles.box}>
                        <div className={styles.controllers}>
                            <div className={styles.box_select}>
                                <select
                                    id="location_Certificate"
                                    name="location_Certificate"
                                    defaultValue={citys}
                                    onChange={Sitecity}
                                    onClick={ShowShahr}
                                >
                                    {provinces.map((item) => (
                                        <option
                                            key={item.id}
                                            id={item.id}
                                            value={item.name}
                                            className={styles.options}
                                            selected>
                                            {showCity ? `${item.name}` : `${citys}`}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className={styles.boxalldata}>
                            <div className={styles.boxdata}>
                                <table id="customers">
                                    <tr>
                                        <th>?????????? ???????????? ??????????</th>
                                        <th>???????? ????????</th>
                                    </tr>
                                    {currentSite.map((site) => {
                                        return <tr key={site.id}>
                                            <td>{site.flys}</td>
                                            <td>{site.name}</td>
                                        </tr>
                                    })}
                                </table>
                            </div>

                            <div className={styles.boxmap}>
                                <IranMap
                                    HideShahr={HideShahr}
                                    setCitys={setCitys}
                                    setCurrentSite={setCurrentSite}
                                />
                            </div>
                        </div>
                    </div>


                    <div className={styles.box}>
                        <div className={styles.header_box}>
                            <div className={styles.title}>
                                <Gem />
                                <h5>?????????? ???????????????? ?????????? ??????</h5>
                            </div>
                            <div className={styles.buttons}>
                                <button style={{ background: showData ? '#80ff00' : '' }} onClick={ShowAll}>
                                    ??????
                                </button>
                                <button style={{ background: !showData ? '#80ff00' : '' }} onClick={ShowFun}>
                                    ????????????
                                </button>
                            </div>

                            <div className={styles.buttonss}>
                                <select
                                    id="flys"
                                    name="flys"
                                >
                                    <option value="all" selected>??????</option>
                                    <option value="fun" className={styles.options} >????????????</option>
                                </select>
                            </div>
                        </div>


                        <div className={styles.listdata}>
                            <div className={styles.data}>
                                <div className={styles.time}>
                                    <span>????????????</span>
                                    <div><Calendar /> <span>15 ?????? 1400</span></div>
                                </div>
                                <span className={styles.qty}>50</span>
                            </div>

                            <div className={styles.data}>
                                <div className={styles.time}>
                                    <span>??????????</span>
                                    <div><Calendar /> <span>8 ?????? 1400 ???? 15 ?????? 1400</span></div>
                                </div>
                                <span className={styles.qty}>350</span>
                            </div>

                            <div className={styles.data}>
                                <div className={styles.time}>
                                    <span>????????????</span>
                                    <div><Calendar /> <span>?????? 1400</span></div>
                                </div>
                                <span className={styles.qty}>16800</span>
                            </div>

                            <div className={styles.data}>
                                <div className={styles.time}>
                                    <span>????????????</span>
                                    <div><Calendar /> <span>1400 - 1401</span></div>
                                </div>
                                <span className={styles.qty}>16800</span>
                            </div>

                        </div>

                    </div>


                    <div className={styles.box}>
                        <div className={styles.header_chart}>
                            <div className={styles.title}>
                                <Hat2 />
                                <h5>?????????? ?????????? ????</h5>
                            </div>
                        </div>

                        <div className={styles.boxchart}>
                            <Chart2 />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AnjomanBody;