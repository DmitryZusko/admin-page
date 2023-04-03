import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import styles from "./styles";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from "@mui/material/Badge";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import useMobileMenu from "./useMobileMenu";

export interface IMobileMenu {
    handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
}

const MobileMenu: React.FC<IMobileMenu> = ({handleProfileMenuOpen}) => {

    const {
        mobileMenuAnchorEl,
        isMobileMenuOpen,
        handleMobileMenuOpen,
        handleMobileMenuClose,
    } = useMobileMenu();

    return (
        <Box sx={styles.box}>
            <IconButton 
                size="large"
                onClick={handleMobileMenuOpen}
            >
                <Badge variant="dot" color="warning">
                    <MoreVertIcon />
                </Badge>
            </IconButton>
            <Menu
                anchorEl={mobileMenuAnchorEl}
                open={isMobileMenuOpen}
                onClose={handleMobileMenuClose}
                sx={styles.menu}
            >
                <MenuItem>
                    <IconButton 
                    size="large" 
                    aria-label="show mail"
                >
                        <Badge variant="dot" color="warning">
                            <MailIcon fontSize="inherit"/>
                        </Badge>
                    </IconButton>
                    <Typography variant="h6">Mail</Typography>
                </MenuItem>
                <MenuItem>
                    <IconButton 
                        size="large" 
                        aria-label="show notifications"
                    >
                        <Badge badgeContent={12} max={9} color="warning">
                            <NotificationsIcon fontSize="inherit"/>
                        </Badge>
                    </IconButton>
                    <Typography variant="h6">Notifications</Typography>
                </MenuItem>
                <MenuItem onClick={handleProfileMenuOpen}>
                    <IconButton size="large">
                        <Avatar alt="LK" variant="rounded"/>
                    </IconButton>
                    <Typography variant="h6">Profile</Typography>
                </MenuItem>
            </Menu>
        </Box>
    )
}

export default MobileMenu;