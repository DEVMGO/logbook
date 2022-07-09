import {Fragment} from "react";
import {useRouter} from "next/router";
import {getAllEvents, getEventById} from "../../data/posts";
import PostSummary from "../../components/post-detail/post-summary";
import PostContent from "../../components/post-detail/post-content";
import Link from "next/link";
import Image from "next/image";

const BlogDetailPage = () => {

    const router = useRouter();
    const blogId = router.query.blogId;
    const blog = getEventById(blogId);

    const posts = getAllEvents();

    if (!blog) {
        return (
            <p>
                No event found!
            </p>
        )
    }

    return (
        <Fragment>
            <section className={`blog-detail`}>
                <div className="main">
                    <div className="content">
                        <PostSummary
                            title={blog.title}
                            image={blog.image}
                            date={blog.date}
                        />
                        <PostContent>
                            <p>
                                {blog.description}
                            </p>
                        </PostContent>
                    </div>
                    <div className="sidebar">
                        <div className="sidebar-box">
                            <h2 className="sidebar-box__title">
                                مقالات
                            </h2>
                            <ul>
                                {posts.map((item) => (
                                    <li key={item.id}>
                                        <div className="sidebar-box__item">
                                            <Link href={`/blog/${item.id}`}>
                                                <a>
                                                    <Image src={`/${item.image}`} layout={"fill"} alt="image" />
                                                </a>
                                            </Link>
                                            <div className="side-blog__info">
                                                <Link href={`/blog/${item.id}`}>
                                                    <h3>
                                                        {item.title}
                                                    </h3>
                                                </Link>
                                                <time>
                                                    {item.date}
                                                </time>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

BlogDetailPage.layout = "L1";
export default BlogDetailPage;