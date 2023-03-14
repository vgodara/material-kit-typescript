import {AppCurrentSubjectProps} from "./types";
import {useChart} from "../../../components/chart";
import {Card, CardHeader} from "@mui/material";
import ReactApexChart from "react-apexcharts";
import {StyledChartWrapper} from "./styles";

export default function AppCurrentSubject({title, subheader, chartLabels, chartColors, chartData}: AppCurrentSubjectProps) {
    const chartOption = useChart({
        tooltip: {
            enabled: false
        },
        fill: {
            opacity: 0.5
        },
        stroke: {
            width: 2
        },
        legend: {
            position: "bottom",
            horizontalAlign: 'center',
            height: 59,
        },
        xaxis: {
            categories: chartLabels,
            labels: {
                style: {
                    colors: chartColors
                }
            }
        }
    })
    return <Card>
        <CardHeader title={title} subheader={subheader}/>
        <StyledChartWrapper sx={{mt: 2}} dir={'ltr'}>
            <ReactApexChart type={'radar'} options={chartOption} series={chartData} height={377}/>
        </StyledChartWrapper>
    </Card>
}