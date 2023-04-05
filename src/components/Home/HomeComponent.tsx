import { Box, Grid, Paper, styled, useTheme} from "@mui/material";
import CustomFab from "../CustomFab/CustomFab";
import CustomNavbar from "../CustomNavbar/CustomNavbar";
import CustomTimeline from "../CustomTimeline/CustomTimeline";
import FlexDrawer from "../FlexDrawer/FlexDrawer";
import ListBlock from "../ListBlock/ListBlock";
import MapComponent from "../MapComponent/MapComponent";
import MapControlComponent from "../MapControlComponent/MapControlComponent";
import NavbarMargin from "../NavbarMargin/NavbarMargin";
import NewsBlock from "../NewsBlock/NewsBlock";
import styles from "./styles";


const HomeComponent = () => {

    
    return (
        <Paper sx={{ml: "3%"}}>
            <NavbarMargin />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <NewsBlock />
                </Grid>
                <Grid item xs={9}>
                    <ListBlock />
                </Grid>
                <Grid item xs={3}>
                    <CustomTimeline />
                </Grid>
                <Grid item xs={9}>
                    <MapComponent />
                </Grid>
                <Grid item xs={3} sx={styles.mapControlBox}>
                    <MapControlComponent />
                </Grid>
            </Grid>
            <CustomFab />
        </Paper>
    )
}

export default  HomeComponent;