import {AppWidgetSummaryProps} from "./types";
import {Card, Typography} from "@mui/material";
import Iconify from "../../../components/iconify";
import {StyledIcon} from "./styles";
import {alpha} from "@mui/material/styles";
import {fShortenNumber} from "../../../utils/formatNumber";

export default function AppWidgetSummary({
                                             color = 'primary',
                                             icon,
                                             title,
                                             total,
                                             sx
                                         }: AppWidgetSummaryProps) {
    return <>
        <Card sx={{
            py: 5,
            color: (theme) => theme.palette[color].darker,
            backgroundColor: (theme) => theme.palette[color].lighter,
            textAlign:'center',
            ...sx,
        }}>
            {icon && <StyledIcon sx={{
                color: (theme) => theme.palette[color].dark,
                backgroundImage: (theme) =>
                    `linear-gradient(135deg, ${alpha(theme.palette[color].dark, 0)},  ${alpha(
                        theme.palette[color].dark,
                        0.24
                    )})`,
            }}>
                <Iconify icon={icon} width={24}></Iconify>
            </StyledIcon>}
            <Typography variant="h3">{fShortenNumber(total)}</Typography>
            <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
                {title}
            </Typography>
        </Card>
    </>

}