import { Fragment } from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = (props) => {
    return (
        <Fragment>
            <header>
                <Header />
            </header>
            <main>
                {props.children}
            </main>
            <footer>
                <Footer />
            </footer>
        </Fragment>
    )
};

export default Layout;