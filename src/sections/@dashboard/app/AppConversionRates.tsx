import {AppConversionRatesProps} from "./types";
import {useChart} from "../../../components/chart";
import {fNumber} from "../../../utils/formatNumber";
import {Card, CardContent, CardHeader} from "@mui/material";
import ReactApexChart from "react-apexcharts";

export default function AppConversionRates({title, subheader, chartData}: AppConversionRatesProps) {
    const chartSeries = [{
        data: chartData.map(data => data.value)
    }]
    const chartOption = useChart({
        chart: {
            type: 'bar'
        },
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '28%',
                borderRadius: 2
            }
        },
        tooltip: {
            marker: { show: false },
            y: {
                formatter: (seriesName) => fNumber(seriesName),
                title: {
                    formatter: () => '',
                },
            },
        },
        xaxis: {
            categories: chartData.map(data => data.label)
        }
    })
    return <>
        <Card>
            <CardHeader title={title} subheader={subheader}/>
            <CardContent sx={{mx:3,p:0,'&:last-child': { pb: 0 }}} dir={'ltr'}>
                <ReactApexChart type={'bar'} options={chartOption} series={chartSeries} height={364}/>
            </CardContent>
        </Card>
    </>
}