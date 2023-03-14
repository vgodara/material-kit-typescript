import {useChart} from "../../../components/chart";
import {fNumber} from "../../../utils/formatNumber";
import {Card, CardHeader} from "@mui/material";
import ReactApexChart from "react-apexcharts";
import {AppCurrentVisitProps} from "./types";
import {useTheme} from "@mui/material/styles";
import {StyledChartWrapper} from "./styles";

export default function AppCurrentVisits({title, subheader, chartData, chartColors}: AppCurrentVisitProps) {
    const theme = useTheme()
    const chartSeries = chartData.map(data => data.value)
    const chartOption = useChart({
        colors: chartColors,
        labels: chartData.map(data => data.label),
        stroke: {colors: [theme.palette.background.paper]},
        legend: {
            position: "bottom",
            horizontalAlign: 'center',
            height: 71,
        },
        dataLabels: {enabled: true, dropShadow: {enabled: false}},
        tooltip: {
            fillSeriesColor: false,
            y: {
                formatter: (seriesName) => fNumber(seriesName),
                title: {
                    formatter: (seriesName) => `${seriesName}`,
                },
            },
        },
        plotOptions: {
            pie: {donut: {labels: {show: false}}},
        },
    })
    return <>
        <Card>
            <CardHeader title={title} subheader={subheader}/>
            <StyledChartWrapper sx={{mt:5}} dir={'ltr'}>
                <ReactApexChart type={'pie'} options={chartOption} series={chartSeries} height={405}/>
            </StyledChartWrapper>
        </Card>
    </>
}