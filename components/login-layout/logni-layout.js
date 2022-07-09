import {Fragment} from "react";

const LoginLayout = (props) => {
    return (
        <Fragment>
            <header className="header-webapp">

            </header>
            <main>
                {props.children}
                <style jsx global>{`body {background: url(../../images/auth/cloud.png) no-repeat;background-size: cover;}`}</style>
            </main>
        </Fragment>
    )
};

export default LoginLayout;