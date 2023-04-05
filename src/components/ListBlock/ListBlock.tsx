import { useCallback, useEffect, useMemo, useState } from "react";
import axios from 'axios';
import { Grid, Grow, IconButton, List, ListItem, ListItemButton, Pagination, Paper, Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import styles from "./styles";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ListItemSecondaryAction } from '@mui/material';
import { TransitionGroup } from "react-transition-group";


const baseUrl = "https://jsonplaceholder.typicode.com/photos";

export interface IItem {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string;
};

const ListBlock = () => {

    const [items, setItems] = useState<IItem[]>([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [totalCount, setTotalCount] = useState(0);
    const [limit, setLimit] = useState(5);
    const [isLoading, setIsLoading] = useState(false);


    const getData = useCallback( () => {
        setIsLoading(true);
        axios.get(`${baseUrl}?_page=${currentPage}&_limit=${limit}`).then((response) => {
            setItems(response.data);
        });

        endLoadingWithTimeout();
    }, [currentPage, limit]);

    const endLoadingWithTimeout = () => {
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    };

    const generateRandomNumber = () => {
        return Math.random() * 100;
    };

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    const generateSkeleton = useMemo(() => {

        let skeleton: JSX.Element[] = [];

        for(let i = 0; i < limit; i++) {
            skeleton.push(
                <Grow>
                <ListItem>
                    <Grid container spacing={2} sx={styles.leftCenteredListItem}>
                        <Grid item lg={2} >
                            <Skeleton variant="circular" width={150} height={150}/>
                        </Grid>
                        <Grid item lg={5} sx={styles.leftCenteredListItem}>
                            <Skeleton variant="rounded" height={150} width={600}/>
                        </Grid>
                        <Grid item lg={4} sx={styles.centeredListItem}>
                            <Skeleton variant="rounded" height={150} width={400}/>
                        </Grid>
                        <Grid item lg={1} sx={styles.centeredListItem}>
                            <Skeleton variant="rounded" height={150} width={90}/>
                        </Grid>
                    </Grid>
                </ListItem>
                </Grow>
            )
        };

        return skeleton;

    }, [limit]);

    const generateContent = useMemo(() => {
        
        let content: JSX.Element[] = [];

        {items.map(item => (
            content.push(
            <Grow
                key={item.id}
            >
            <ListItem 
                secondaryAction={
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
                }
            >
                <ListItemButton sx={styles.listButton}>
                <Grid container>
                    <Grid item xs={12} lg={6} xl={2} sx={styles.leftCenteredListItem}>
                        <Box 
                            component="img" 
                            src={item.thumbnailUrl}
                            sx={styles.imageBox}
                        />
                    </Grid>
                    <Grid item xs={12} lg={6} xl={5} sx={styles.leftCenteredListItem}>
                        <Box sx={styles.infoBox}>
                            <Typography variant="body1" sx={styles.headerText}>
                                #{item.id} {item.title}
                            </Typography>
                            <Typography variant="body2">
                                {item.title} {item.title} {item.title}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={12} xl={4} sx={styles.centeredListItem}>
                        <Box sx={styles.infoBox}>
                            <Typography variant="body1">
                                {item.title}
                            </Typography>
                            <Typography variant="body2">
                                {item.title}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={12} xl={1} sx={styles.centeredListItem}>
                        <Typography variant="body1" sx={styles.headerText}>
                            ${generateRandomNumber().toFixed(2)}
                        </Typography>
                    </Grid>
                </Grid>
                </ListItemButton>
            </ListItem>
            </Grow>
        )))};

        return content;
    }, [items]);

    useEffect(() => {
        getData()
    }, [currentPage, limit, getData]);


    return (
        <Paper sx={styles.listPaper}>
        <List>
        <TransitionGroup >
            {generateContent}
            {/* {isLoading 
            ? generateSkeleton
            : generateContent} */}
        </TransitionGroup>
        </List>
        <Pagination 
            variant="outlined"
            shape="rounded"
            count={20}
            page={currentPage}
            onChange={handlePageChange}
            showFirstButton 
            showLastButton
            siblingCount={5}
            sx={styles.pagination}
        />
        </Paper>
    )
}

export default ListBlock;