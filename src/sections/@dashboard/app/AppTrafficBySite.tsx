import Grid from '@mui/material/Unstable_Grid2';
import {AppTrafficBySiteProps, SiteVisitProps} from "./types";
import {Box, Card, CardContent, CardHeader, Paper, Typography} from "@mui/material";
import {fShortenNumber} from "../../../utils/formatNumber";

export default function AppTrafficBySite({title, subheader, list}: AppTrafficBySiteProps) {
    return <><Card>
        <CardHeader title={title} subheader={subheader}/>
        <CardContent component={Grid} container spacing={2} sx={{p: 3}}>
            {list.map((details, index) => (
                <SiteVisit key={index} details={details}/>
            ))}
        </CardContent>
    </Card></>
}

function SiteVisit({details: {name, value, icon}}: SiteVisitProps) {
    return <>
        <Grid xs={6}>
            <Paper variant="outlined" sx={{py: 2.5, textAlign: 'center'}}>
                <Box sx={{mb: 0.5}}>{icon}</Box>
                <Typography variant={'h6'}>{fShortenNumber(value)}</Typography>
                <Typography variant={'body2'} color={'text.secondary'}>{name}</Typography>
            </Paper>
        </Grid>
    </>
}