import { Fab, Fade, Typography } from "@mui/material";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useEffect, useState } from "react";
import styles from "./styles";


const CustomFab = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 10) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            };
        })
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <>
        {isVisible
        ?
            <Fade in={isVisible}>
                <Fab onClick={scrollUp} sx={styles.fab}>
                    <ArrowDropUpIcon />
                </Fab>
            </Fade>
        :
            null}
        </>
    )
};

export default CustomFab;