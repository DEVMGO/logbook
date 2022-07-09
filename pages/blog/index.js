import {Fragment} from "react";
import Posts from "../../components/posts/posts";
import {getAllEvents} from "../../data/posts";

const BlogPage = () => {

    const posts = getAllEvents();

    return (
        <Fragment>
            <section>
                <Posts posts={posts}/>
            </section>
        </Fragment>
    );

};

BlogPage.layout = "L1";
export default BlogPage;