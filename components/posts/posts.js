import styles from './posts.module.css';
import {Fragment} from "react";
import PostItem from "./post-item";
import TitleCard from "../ui/title-card";
// import imgPath from '../../public/images/posts/post-2.jpg';
import Image from "next/image";

const Posts = (props) => {

    const {posts} = props;

    return (
        <Fragment>
            <ul className={`${styles.posts}`}>
                {posts.map((post) => (
                    <PostItem
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        description={post.description}
                        // image={post.image}
                    />
                ))}
            </ul>
        </Fragment>
    );
};

export default Posts;