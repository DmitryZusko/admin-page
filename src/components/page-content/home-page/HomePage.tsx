import CustomNavbar from "@/components/CustomNavbar/CustomNavbar";
import FlexDrawer from "@/components/FlexDrawer/FlexDrawer";
import HomeComponent from "@/components/Home/HomeComponent";
import { Box, Grid } from "@mui/material";


const HomePage = () => {

    return (
        <>
            <CustomNavbar />
            <FlexDrawer />
            <HomeComponent />
        </>
    )
}

export default HomePage;