import '../styles/globals.css';
import "../public/font/fontawesome-pro-5.15.1-web-ulabs/css/all.min.css";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import Layout from "../components/layout/layout";
import WebappLayout from "../components/webapp-layout/webapp-layout";
import LoginLayout from "../components/login-layout/logni-layout";
import ThemeProvider from '../components/auth/themprovider';
import AnjomanLayout from '../components/anjoman-layout/anjoman.layout';

const layouts = {
    L1: Layout,
    L2: WebappLayout,
    L3: LoginLayout,
    L4: AnjomanLayout,
};

const MyApp = ({ Component, pageProps }) => {
    const Layout = layouts[Component.layout] || ((children) => <>{children}</>);
    return (
        <ThemeProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
};
export default MyApp;
