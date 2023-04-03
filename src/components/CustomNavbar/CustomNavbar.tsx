import { AppBar, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/system/Box";
import React, { useState } from "react";
import DesktopMenu from "./components/DesktopMenu/DesktopMenu";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import ProfileMenu from "./components/ProfileMenu/ProfileMenu";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useDispatch } from "react-redux";
import { toogleDrawer } from "@/redux/Drawler/slice";


const CustomNavbar = () => {

    const [profileMenuAnchorEl, setProfileMenuAnchorEl] = useState<HTMLElement | null>(null);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

    const dispatch = useDispatch();

    const handleToogleDrawer = () => {
        dispatch(toogleDrawer());
    }

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setProfileMenuAnchorEl(event.currentTarget);
        setIsProfileMenuOpen(true);
    };

    const handleProfileMenuClose = () => {
        setProfileMenuAnchorEl(null);
        setIsProfileMenuOpen(false);
    }

    return (
    <AppBar position="fixed" sx={{zIndex: theme.zIndex.drawer + 1}}>
        <Toolbar>
            {isMobile &&
            <IconButton 
                size="large" 
                onClick={handleToogleDrawer}
                edge="start"
            >
                <MenuRoundedIcon fontSize="large"/>
            </IconButton>}
            <Typography variant="h4">
                BFC
            </Typography>
            <Box sx={{flexGrow: 1}} />
            <DesktopMenu 
                handleProfileMenuOpen={handleProfileMenuOpen}
            />
            <MobileMenu 
                handleProfileMenuOpen={handleProfileMenuOpen}
            />
            <ProfileMenu 
                anchorEl={profileMenuAnchorEl}
                isOpen={isProfileMenuOpen}
                handleClose={handleProfileMenuClose}
            />
        </Toolbar>
    </AppBar>
    )
}

export default CustomNavbar;