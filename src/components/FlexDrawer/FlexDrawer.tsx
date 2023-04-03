import { Box, Collapse, Divider, Drawer, List, ListItem, styled, Toolbar } from "@mui/material";
import { useMemo, useState } from "react";
import {DashboardTwoTone, ListAltTwoTone, PeopleAltTwoTone, Inventory2TwoTone, 
    StoreMallDirectoryTwoTone, CategoryTwoTone, StarRateTwoTone,
    ArrowLeftRounded, ArrowRightRounded} from '@mui/icons-material';
import IconButton from "@mui/material/IconButton";
import StarRateTwoToneIcon from '@mui/icons-material/StarRateTwoTone';
import Typography from "@mui/material/Typography";
import styles from "./styles";
import { useDispatch, useSelector } from 'react-redux'
import { drawerState } from "@/redux/Drawler";
import { setDrawerState, toogleDrawer } from "@/redux/Drawler/slice";


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

    const DrawerHeader = styled("div")(({theme}) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    }));

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

    const drawerShortItems = useMemo(() => {
        return (
            <List>
                {ITEMS.map((item, index) => (
                    <ListItem key={item}>
                        <IconButton>
                            {ITEM_ICONS[index]}
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
            <DrawerHeader />
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
            <DrawerHeader />
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