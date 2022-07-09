import styles from './title-card.module.css';

const TitleCard = (props) => {

    const classes = ' ' + props.className;

    return (
        <div className={styles.card + classes}>
            {props.children}
        </div>
    )
};

export default TitleCard;