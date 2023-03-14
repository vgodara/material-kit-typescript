import {AppWebsiteVisitsProps} from "./types";
import {Box, Card, CardHeader} from "@mui/material";
import ReactApexChart from 'react-apexcharts';
import {useChart} from "../../../components/chart";


export default function AppWebsiteVisits({title, subheader, chartLabels, chartData}: AppWebsiteVisitsProps) {
    const chartOptions = useChart({
        plotOptions: {bar: {columnWidth: '16%'}},
        fill: {
            type: chartData.map((i) => i.fill)
        },
        // labels: chartLabels,
        xaxis: {
            categories: chartLabels,
            type: 'datetime'
        },
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: (y) => {
                    if (typeof y !== 'undefined') {
                        return `${y.toFixed(0)} visits`;
                    }
                    return y;
                },
            },
        },
    });
    return <>
        <Card>
            <CardHeader title={title} subheader={subheader}></CardHeader>
            <Box sx={{p: 3, pb: 1}} dir="ltr">
                <ReactApexChart type="line" series={chartData}
                                options={chartOptions} height={364}/>
            </Box>

        </Card>
    </>
}