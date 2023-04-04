import { Animation, EventTracker, HoverState } from "@devexpress/dx-react-chart";
import { Chart, PieSeries, Legend, Title, Tooltip } from "@devexpress/dx-react-chart-material-ui";
import { Card, CardActionArea, CardContent, CardMedia, Grid, Paper, Typography } from "@mui/material";
import styles from "./styles";


const NewsBlock = () => {

    const visitors = [
        {visitor: "Registrated", area: 789},
        {visitor: "New", area: 56},
        {visitor: "Unregistrated", area: 1245},
    ];



    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sx={styles.header}>
                <Typography paragraph={true} variant="h4">News</Typography>
            </Grid>
            <Grid item lg={4} xs={12}>
                <Paper>
                    <Chart data={visitors} height={343}>
                        <PieSeries
                            valueField="area"
                            argumentField="visitor"
                            innerRadius={.5}
                            outerRadius={1}
                        />
                        <Legend />
                        <Title text="TODAY VISITORS"/>
                        <Animation duration={800}/>
                        <EventTracker />
                        <HoverState />
                        <Tooltip />
                    </Chart>
                </Paper>
            </Grid>
            <Grid item lg={4} xs={12} sx={styles.cardItem}>
                <Card>
                    <CardActionArea>
                        <CardMedia 
                            component="img"
                            height="250px"
                            image="./images/cake.jpg"
                            alt="cake"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Lorem, ipsum.
                            </Typography>
                            <Typography variant="body2" noWrap>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                Repellendus odit molestiae error mollitia doloremque assumenda 
                                harum quos delectus ut quo ipsum quaerat sunt, est fuga.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item lg={4} xs={12} sx={styles.cardItem}>
                <Card>
                    <CardActionArea>
                        <CardMedia 
                            component="img"
                            height="250px"
                            image="./images/echpochmak.png"
                            alt="WTF is this"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Lorem, ipsum.
                            </Typography>
                            <Typography variant="body2" noWrap>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                Repellendus odit molestiae error mollitia doloremque assumenda 
                                harum quos delectus ut quo ipsum quaerat sunt, est fuga.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>
    )
}

export default NewsBlock; 