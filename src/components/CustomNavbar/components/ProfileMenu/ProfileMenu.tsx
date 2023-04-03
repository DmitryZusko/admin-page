import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';

export interface IProfileMenu {
    anchorEl: HTMLElement | null,
    isOpen: boolean,
    handleClose: () => void,
}

const ProfileMenu: React.FC<IProfileMenu> = ({anchorEl, isOpen, handleClose}) => {

    return (
        <Menu
            anchorEl={anchorEl}
            open={isOpen}
            onClose={handleClose}
        >
            <MenuItem>
                <IconButton size="large">
                    <SettingsIcon />
                </IconButton>
                <Typography variant="h6">Settings</Typography>
            </MenuItem>
            <MenuItem>
                <IconButton size="large">
                    <LogoutIcon />
                </IconButton>
                <Typography variant="h6">Log out</Typography>
            </MenuItem>
        </Menu>
    )
}

export default ProfileMenu;