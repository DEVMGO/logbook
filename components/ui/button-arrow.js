import Arrow from "../icons/arrow";
import Link from "next/link";
import IndexBlogArrow from "../icons/index-blog-arrow'";

const ButtonArrow = (props) => {
    return (
        <Link href={props.link}>
            <a>
                {props.children}
                <span>
                                        <IndexBlogArrow/>
                                    </span>
            </a>
        </Link>
    );
};

export default ButtonArrow;