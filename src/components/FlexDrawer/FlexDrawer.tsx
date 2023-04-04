import { Box, Collapse, Drawer, List, ListItem } from "@mui/material";
import { useMemo } from "react";
import {DashboardTwoTone, ListAltTwoTone, PeopleAltTwoTone, Inventory2TwoTone, 
    StoreMallDirectoryTwoTone, CategoryTwoTone, StarRateTwoTone,
    ArrowLeftRounded, ArrowRightRounded} from '@mui/icons-material';
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import styles from "./styles";
import { useDispatch, useSelector } from 'react-redux'
import { drawerState } from "@/redux/Drawler";
import { setDrawerState, toogleDrawer } from "@/redux/Drawler/slice";
import NavbarMargin from "../NavbarMargin/NavbarMargin";


const FlexDrawer = () => {

    const ITEMS = useMemo(() =>
        ["Dashboard", "Orders", "Users", 
        "Products", "Providers", "Categories", "Reviews"], []);
    const ITEM_ICONS = useMemo(() =>
        [
        <DashboardTwoTone key={"DashboardTwoTone"} />,
        <ListAltTwoTone key={"ListAltTwoTone"} />,
        <PeopleAltTwoTone key={"PeopleAltTwoTone"} />,
        <Inventory2TwoTone key={"Inventory2TwoTone"} />,
        <StoreMallDirectoryTwoTone key={"StoreMallDirectoryTwoTone"} />,
        <CategoryTwoTone key={"CategoryTwoTone"} />,
        <StarRateTwoTone key={"StarRateTwoTone"} />,
    ], []);

    const dispatch = useDispatch();

    const isOpen = useSelector(drawerState)

    const handleToogleDrawer = () => {
        dispatch(toogleDrawer());
    };

    const closeFullItems = () => {
        dispatch(setDrawerState(false));
    };

    const drawerFullItems = useMemo(() => {
        return (
            <List disablePadding>
                {ITEMS.map((item, index) => (
                    <ListItem key={item} sx={styles.listItem}>
                        <IconButton>
                            {ITEM_ICONS[index]}
                            <Typography variant="h6" sx={styles.iconText}>{item}</Typography>
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        )
    }, [ITEMS, ITEM_ICONS])

    return (
        <>
        <Drawer
            variant="temporary"
            open={isOpen}
            onClose={closeFullItems}
            sx={styles.mobileDrawer}
        >
            <NavbarMargin />
            {drawerFullItems}
            <Box sx={{ flexGrow: "1"}}/>
            <IconButton size="large" onClick={closeFullItems}>
                <ArrowLeftRounded />
            </IconButton>
        </Drawer>
        <Drawer
            variant="permanent"
            open
            onMouseLeave={closeFullItems}
            sx={styles.desktopDrawer}
        >
            <NavbarMargin />
            <Collapse in={isOpen} collapsedSize="59px" orientation="horizontal">
                {drawerFullItems}
            </Collapse>

            <Box sx={{ flexGrow: "1"}}/>
            <IconButton size="large" onClick={handleToogleDrawer}>
                {isOpen 
                ? <ArrowLeftRounded fontSize="large"/> 
                : <ArrowRightRounded fontSize="large"/>}
            </IconButton>
        </Drawer>
        </>
    )
}

export default FlexDrawer;