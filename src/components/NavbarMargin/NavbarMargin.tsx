import { styled, useTheme } from "@mui/material";

const NavbarMargin = () => {
    
    const theme = useTheme();
    
    const MarginBlock = styled("div")(({theme}) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    }));

    return (
        <MarginBlock />
    )

};

export default NavbarMargin;