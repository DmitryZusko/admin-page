import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import { IconButton, Typography } from '@mui/material';

export interface ILocationPin {
    text: string,
    lat: number,
    lng: number,
}

const LocationPin: React.FC<ILocationPin> = ({text}) => {

    return (
        <IconButton>
            <PersonPinCircleIcon />
            <Typography>{text}</Typography>
        </IconButton>
    )
}

export default LocationPin;