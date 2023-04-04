import { Box, Grid, Paper, styled, useTheme} from "@mui/material";
import CustomNavbar from "../CustomNavbar/CustomNavbar";
import FlexDrawer from "../FlexDrawer/FlexDrawer";
import NavbarMargin from "../NavbarMargin/NavbarMargin";
import NewsBlock from "../NewsBlock/NewsBlock";


const HomeComponent = () => {

    
    return (
        <Paper sx={{ml: "3%"}}>
            <NavbarMargin />
            <Grid container>
                <Grid item xs={12}>
                    <NewsBlock />
                </Grid>
                <Grid item xs={12}>

                </Grid>

            </Grid>
        </Paper>
    )
}

export default  HomeComponent;