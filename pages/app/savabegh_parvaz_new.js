import { Fragment } from "react";
import React, { useContext } from "react";
import { ThemeContext, THEME_TYPE } from "../../components/auth/themprovider";
import Savabegh_Morabi from "../../components/app/savabegh_morabi/savabegh_morabi";
import Flight_Records from "../../components/app/flight_records/flight_records";

const Register_Parvaz = () => {

    const { themeMode } = useContext(ThemeContext)
    return (
        <Fragment>
            {themeMode === THEME_TYPE.MORABI ?
                <Savabegh_Morabi />
                :
                <Flight_Records />
            }
        </Fragment>
    )
};

Register_Parvaz.layout = "L2";
export default Register_Parvaz;