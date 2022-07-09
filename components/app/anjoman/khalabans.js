import morabi from './morabibody.module.css';
import Button from "../../ui/button";
import { getAllStudents } from '../../../data/students';
import Arrow from '../../icons/arrow';
import { useState } from 'react';
import Hat2 from '../../icons/hat2';
import Medal from '../../icons/medal';
import AnjomanMorabiSavabegh from './anjoman_morabi_savabegh';


const Khalabans = () => {

    const Allstudents = getAllStudents();

    const [showData, setShowData] = useState(null);
    const ToggleShowData = (id) => {
        if (showData === id) {
            return setShowData(null);
        }
        setShowData(id);
    };

    return (
        <>
            <section className={morabi.morabi}>
                <div className={morabi.tab}>
                    {Allstudents.map((khalaban) => (
                        <div className={morabi.box_students} key={khalaban.id} id={khalaban.id}>

                            {!showData ?
                                <div className={morabi.title}>
                                    <h4>
                                        <Medal /> {khalaban.title}
                                    </h4>
                                </div>
                                :
                                ''
                            }

                            {khalaban.members.map((list) => (
                                <>
                                    {showData == list.id ?

                                        <div className={morabi.member_data} key={list.id} id={list.id}>
                                            <div className={morabi.header_data}>
                                                <h5><Hat2 />سوابق پروازی {list.name}</h5>
                                                <a onClick={() => ToggleShowData(list.id)}>
                                                    <Arrow />
                                                </a>
                                            </div>

                                            <AnjomanMorabiSavabegh />
                                        </div>

                                        :
                                        <>
                                            {!showData ?
                                                <div className={morabi.item_level} key={list.id} id={list.id}>
                                                    <div className={morabi.item}>
                                                        <span className={morabi.number}>
                                                            {list.index}
                                                        </span>
                                                        <div className={morabi.before_box}>
                                                            <div className={morabi.box_data}>
                                                                <div className={morabi.data}>
                                                                    <Hat2 />
                                                                    <h3>
                                                                        {list.name}
                                                                    </h3>
                                                                </div>
                                                                <Button className={morabi.button} onClick={() => ToggleShowData(list.id)}>
                                                                    مشاهده جزئیات لاگ
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                :
                                                ''
                                            }
                                        </>

                                    }
                                </>
                            ))
                            }
                        </div>
                    ))
                    }
                </div>
            </section>
        </>
    );
}

export default Khalabans;