import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react"


const Map = ({lat, lng, text}: {lat: number, lng: number, text: string}) => {
    const ref = useRef(null);
    const [map, setMap] = useState<google.maps.Map | null>(null);

    useEffect(() => {
        if(ref.current) {
            setMap(
                new google.maps.Map(ref.current, {
                    zoomControl: true,
                    mapTypeControl: true,
                    streetViewControl: true,
                    center: {
                        lat: lat,
                        lng: lng,
                    },
                    zoom: 17,
                })
            )
        };
    }, [ref, lat, lng, text]);

    useEffect(() => {
        new google.maps.Marker({
            position: {
                lat: lat,
                lng: lng,
            },
            map,
            title: text,
        });
    }, [map]);

    return (
        <Box ref={ref} sx={{height: "888px", width: "1300px"}}>
        </Box>
    )
}

export default Map;