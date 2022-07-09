import styles from './post-content.module.css';

const PostContent = (props) => {
    return (
      <div className={styles.content}>
          {props.children}
      </div>
    );
};

export default PostContent;