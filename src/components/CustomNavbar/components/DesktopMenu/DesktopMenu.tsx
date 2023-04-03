import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from "@mui/material/Avatar";
import styles from "./styles";

export interface IDesktopMenu {
    handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
}

const DesktopMenu: React.FC<IDesktopMenu> = ({handleProfileMenuOpen}) => {

    return (
        <Box sx={styles.box}>
            <IconButton 
                size="large" 
                aria-label="show mail"
            >
                <Badge variant="dot" color="warning">
                    <MailIcon fontSize="inherit"/>
                </Badge>
            </IconButton>
            <IconButton 
                size="large" 
                aria-label="show notifications"
            >
                <Badge badgeContent={12} max={9} color="warning">
                    <NotificationsIcon fontSize="inherit"/>
                </Badge>
            </IconButton>
            <IconButton size="large" edge="end" onClick={handleProfileMenuOpen}>
                <Avatar alt="LK" variant="rounded"/>
            </IconButton>
        </Box>
    )
}

export default DesktopMenu;