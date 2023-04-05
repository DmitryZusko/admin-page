import { Grid, List, ListItemButton, Paper, Typography } from "@mui/material";
import { useCallback, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import HouseIcon from '@mui/icons-material/House';
import styles from "./styles";
import { setNewCoordinates } from "@/redux/MapControl/slice";

export interface IMapButton {
    caption: string,
    address: string,
    lat: number,
    lng: number,
}

const MapControlComponent = () => {

    const buttonContent: IMapButton[] = useMemo( () => [
            {
                caption: "Main Office",
                address: "58 N Branford Rd, Wallingford, CT 06492, USA",
                lat: 41.437424,
                lng: -72.751794,
            },
    
            {
                
                caption: "Село в Африці",
                address: "Десь в Африці",
                lat: 6.1675627482740945,
                lng: -5.348841257035714,
            },
            
            {
                caption: "Pigeon city",
                address: "1-chōme-11 Nishikubo, Musashino, Tokyo 180-0013, Japan",
                lat: 35.70407437075822,
                lng: 139.5577317304603,
            },
            
            {
                caption: "CowDom",
                address: "Central Cambridge, Cambridge CB3 9EZ, UK",
                lat: 52.19961608285956,
                lng: 0.1157753352937334,
            },
    
            {
                caption: "R'lyeh",
                address: "Here lives Cthulhu",
                lat: -47.15,
                lng: -126.716667,
            },
        ], []);

    const dispatch = useDispatch();

    const handleChangeCoordinates = (button: IMapButton) => {
        console.log(process.env.REACT_APP_API_KEY)
        dispatch(setNewCoordinates({
            lat: button.lat,
            lng: button.lng,
            text: button.address,
        }));
    }

    const createButtons = useMemo(() => {
        let buttons: JSX.Element[] = [];

        buttonContent.map((button) => {
            buttons.push(
                <ListItemButton key={button.caption} onClick={() => handleChangeCoordinates(button)}>
                    <Grid container spacing={2}>
                        <Grid item xs={2} sx={styles.icon}>
                            <HouseIcon fontSize="large"/>
                        </Grid>
                        <Grid item xs={10}>
                            <Typography variant="body1">
                                {button.caption}
                            </Typography>
                            <Typography variant="body2">
                                {button.address}
                            </Typography>
                        </Grid>
                    </Grid>
                </ListItemButton>
            )
        });

        return buttons;
    },[buttonContent]);

    return (
        <Paper sx={styles.buttonList}>
            <List>
                {createButtons}
            </List>
        </Paper>
    )
}

export default MapControlComponent;