import { currentCaption, currentLatitude, currentLongitude } from "@/redux/MapControl";
import { Wrapper } from "@googlemaps/react-wrapper";
import { Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import LocationPin from "./components/LocationPin/LocationPin";
import Map from "./components/Map/Map";
import styles from "./styles";


const MapComponent = () => {

    const lat = useSelector(currentLatitude);
    const lng = useSelector(currentLongitude);
    const text = useSelector(currentCaption);

    return (
        <Paper sx={styles.map}>
            <Wrapper apiKey="">
                <Map lat={lat} lng={lng} text={text}/>
            </Wrapper>
        </Paper>
    )
}

export default MapComponent;