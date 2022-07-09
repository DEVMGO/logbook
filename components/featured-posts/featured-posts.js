import styles from './featured-posts.module.css';
import Slider from "react-slick";
import Image from "next/image";
import {getFeaturedEvents} from "../../data/posts";
import Link from "next/link";
import ButtonArrow from "../ui/button-arrow";

const FeaturedPosts = () => {

    const posts = getFeaturedEvents();

    /*const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });*/
    const settings = {
        focusOnSelect: true,
        dots: false,
        infinite: true,
        loop: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        className: "center",
        centerMode: false,
        centerPadding: "60px",
        rtl: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className={styles['featured-post']}>
            <h2 className={styles['featured-post__title']}>
                <p className={`txtGreen`}>
                    وبلاگ
                </p>
                <p className={`txtWhite`}>
                    دیجی
                </p>
                <p className="txtGreen">
                    لاگ
                </p>
                <p className={`txtWhite`}>
                    بوک
                </p>
            </h2>
            <Slider {...settings}>
                {posts.map((post) => (
                    <div key={post.id} className={styles.item}>
                        <div className={`item-img__main styles['item-img__wrapper']`}>
                            <Link href={`/blog/${post.id}`} passHref>
                                <a>
                                    {/* <Image src={`/${post.image}`} alt={post.title} layout={"fill"}/> */}
                                </a>
                            </Link>
                        </div>
                        <div className="slick-post__info">
                            <div className={styles.box}>
                                <h3>
                                    <Link href={`/blog/${post.id}`}>
                                        {post.title}
                                    </Link>
                                </h3>
                                <p>
                                    {post.description.slice(0, 161) + '...'}
                                </p>
                                <div className={styles.controllers}>
                                    <ButtonArrow link={`/blog/${post.id}`}>
                                        ادامه مطلب
                                    </ButtonArrow>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default FeaturedPosts;