import {AppNewsUpdateProps, NewsItemProps} from "./types";
import {Box, Button, Card, CardHeader, Divider, Link, Stack, Typography} from "@mui/material";
import {fToNow} from "../../../utils/formatTime";
import Iconify from "../../../components/iconify";
import Scrollbar from "../../../components/scrollbar";

export default function AppNewsUpdate({title, subHeader, list}: AppNewsUpdateProps) {
    return <><Card>
        <CardHeader title={title} subheader={subHeader}/>
        <Scrollbar>
            <Stack spacing={3} sx={{p: 3, pr: 0}}>
                {list.map((news, index) => (
                    <NewsItem key={index} news={news}/>
                ))}
            </Stack>
        </Scrollbar>
        <Divider/>

        <Box sx={{p: 2, textAlign: 'right'}}>
            <Button size="small" color="inherit" endIcon={<Iconify icon={'eva:arrow-ios-forward-fill'}/>}>
                View all
            </Button>
        </Box>
    </Card> </>
}

function NewsItem({news: {title, description, image, postedAt}}: NewsItemProps) {
    return <><Stack direction={'row'} alignItems={'center'} spacing={2}>
        <Box component={'img'}
             sx={{
                 width: 48,
                 height: 48,
                 borderRadius: 1.5,
                 flexShrink: 0
             }}
             src={image}
        />
        <Box sx={{
            m: 0,
            flexGrow: 1,
        }}>
            <Link color={'inherit'} variant="subtitle2" underline="hover">
                {title}
            </Link>
            <Typography color={'text.secondary'}
                        variant={'body2'}>{description}</Typography>
        </Box>
        <Typography variant={'caption'} sx={{
            pr: 3,
            flexShrink: 0,
        }} color={'text.secondary'}>{fToNow(postedAt)}</Typography>
    </Stack></>
}