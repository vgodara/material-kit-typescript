import {Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator} from "@mui/lab";
import {AppOrderTimeLineProps, OrderItemProps} from "./types";
import {Card, CardContent, CardHeader, Typography} from "@mui/material";
import {fDateTime} from "../../../utils/formatTime";

export default function AppOrderTimeline({list, title, subheader}: AppOrderTimeLineProps) {
    return <><Card>
        <CardHeader title={title} subheader={subheader}></CardHeader>
        <CardContent>
           <Timeline>
               {list.map((item, index) => (
                   <OrderItem key={item.id} item={item} isLast={index === list.length - 1}></OrderItem>
               ))}

           </Timeline>
        </CardContent>
    </Card></>
}

function OrderItem({item: {time, type = 'error', title}, isLast}: OrderItemProps) {
    return <>
        <TimelineItem sx={{
            ':before': {
                display: 'none'
            }
        }}>
            <TimelineSeparator>
                <TimelineDot color={type}/>
                {isLast ? null : <TimelineConnector/>}
            </TimelineSeparator>
            <TimelineContent>
                <Typography variant={'subtitle2'}>{title}</Typography>
                <Typography variant={'caption'}>{fDateTime(time)}</Typography>
            </TimelineContent>
        </TimelineItem>
    </>
}