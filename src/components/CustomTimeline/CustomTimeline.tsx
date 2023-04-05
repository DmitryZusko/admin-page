import { Box, Grid, Paper } from "@mui/material";
import Timeline from '@mui/lab/Timeline';
import { useCallback, useEffect, useMemo, useState } from "react";
import { TimelineItem } from "@mui/lab";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import styles from "./styles";

export interface IContentObject {
    code: number,
    content: string,
    status: boolean,
};


const CustomTimeline = () => {

    const [content, setContent] = useState<JSX.Element[]>([]);

    const generateContent = useMemo(() => {

        let result: JSX.Element[] = [];

        console.log("create content");
        

        for(let i = 0; i < 24; i++ ) {

            let number = Math.floor((Math.random() * 5));

            result.push(
                <TimelineItem key={i}>
                    <TimelineOppositeContent>
                        {number}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot 
                            variant="outlined" 
                            color={number > 2.5 ? "success" : "error"}
                        />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        {"lorem".repeat(number)}
                    </TimelineContent>
                </TimelineItem>
            )
        };

        return result;
    }, []);

    useEffect(() => {
        setContent(generateContent);
    }, [generateContent]);

    return (
        <Paper sx={styles.timeLine}>
            <Timeline position="right">
                {content}
            </Timeline>
        </Paper>
    )
}

export default CustomTimeline;