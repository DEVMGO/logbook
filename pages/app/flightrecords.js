import { Fragment } from "react";
import Flight_Records from "../../components/app/flight_records/flight_records";

const FlightRecords = () => {
    return (
        <Fragment>
            <Flight_Records />
        </Fragment>
    )
};

FlightRecords.layout = "L2";
export default FlightRecords;