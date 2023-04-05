import { Box, Grid, Paper, styled, useTheme} from "@mui/material";
import CustomFab from "../CustomFab/CustomFab";
import CustomNavbar from "../CustomNavbar/CustomNavbar";
import FlexDrawer from "../FlexDrawer/FlexDrawer";
import ListBlock from "../ListBlock/ListBlock";
import NavbarMargin from "../NavbarMargin/NavbarMargin";
import NewsBlock from "../NewsBlock/NewsBlock";
import styles from "./styles";


const HomeComponent = () => {

    
    return (
        <Paper sx={{ml: "3%"}}>
            <NavbarMargin />
            <Grid container>
                <Grid item xs={12} sx={styles.newsBlock}>
                    <NewsBlock />
                </Grid>
                <Grid item xs={9} sx={styles.listBlock}>
                    <ListBlock />
                </Grid>
                <Grid item xs={3}>

                </Grid>
            </Grid>
            <CustomFab />
        </Paper>
    )
}

export default  HomeComponent;