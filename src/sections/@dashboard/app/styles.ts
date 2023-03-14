import {Box, CardContent, ListItemIcon, MenuItem, styled} from "@mui/material";


export const StyledMenuItem = styled(MenuItem)(({theme}) => ({
    paddingLeft: 1,
    paddingRight: 1,
    borderRadius: 0.75,
    color: theme.palette.text.primary,
    ...theme.typography.h1
}))

export const StyledListItemIcon = styled(ListItemIcon)(({theme}) => ({
    color: 'inherit',
}))

export const StyledIcon = styled(Box)(({theme}) => ({
    margin: 'auto',
    display: 'flex',
    borderRadius: '50%',
    alignItems: 'center',
    width: theme.spacing(8),
    height: theme.spacing(8),
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
})) as typeof Box;


export const StyledChartWrapper = styled(CardContent)(({theme}) => ({
    padding:0,
    '&:last-child':{
        padding:0,
    },
    '& .apexcharts-legend': {
        borderTop: `solid 1px ${theme.palette.divider}`,
    },
})) as typeof CardContent