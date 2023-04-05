import { Grid, Paper, Slide,} from "@mui/material";
import { useInView } from 'react-intersection-observer';
import styles from "./styles";
import CustomFab from "../CustomFab/CustomFab";
import NavbarMargin from "../NavbarMargin/NavbarMargin";
import NewsBlock from "../NewsBlock/NewsBlock";
import ListBlock from "../ListBlock/ListBlock";
import CustomTimeline from "../CustomTimeline/CustomTimeline";
import MapComponent from "../MapComponent/MapComponent";
import MapControlComponent from "../MapControlComponent/MapControlComponent";



const HomeComponent = () => {

    const intersectionOptions = {
        delay: 500,
        //triggerOnce: true,
        trackVisibility: true,
    };

    const { ref: listBlockRef, inView: listBlockInView } = useInView(intersectionOptions);
    const { ref: mapBlockRef, inView: mapblockInView } = useInView(intersectionOptions);
    
    return (
        <Paper sx={{ml: "3%"}}>
            <NavbarMargin />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                     <NewsBlock />
                </Grid>
                <Slide direction="right" in={listBlockInView}>
                <Grid item xs={9} ref={listBlockRef}>
                    <ListBlock />
                </Grid>
                </Slide>
                <Slide direction="right" in={listBlockInView}>
                <Grid item xs={3} ref={listBlockRef}>
                    <CustomTimeline />
                </Grid>    
                </Slide>
                <Slide direction="right" in={mapblockInView}>
                <Grid item xs={9} ref={mapBlockRef}>
                    {mapblockInView && <MapComponent />}
                </Grid>
                </Slide>
                <Slide direction="right" in={mapblockInView}>
                <Grid item xs={3} ref={mapBlockRef} sx={styles.mapControlBox}>
                    {mapblockInView && <MapControlComponent />}
                </Grid>
                    
                </Slide>
            </Grid>
            <CustomFab />
        </Paper>
    )
}

export default  HomeComponent;