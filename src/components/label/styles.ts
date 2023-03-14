import {Box, styled, Theme} from "@mui/material";
import {alpha} from "@mui/material/styles";


type OwnerState = {
    variant: 'filled' | 'outlined' | 'ghost' | 'soft',
    color: 'default' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error'
}

interface Props {
    ownerState: OwnerState
}


export const StyledLabel = styled(Box)<Props>(({theme, ownerState}) => ({
    height: 24,
    minWidth: 22,
    lineHeight: 0,
    borderRadius: 6,
    cursor: 'default',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    display: 'inline-flex',
    justifyContent: 'center',
    textTransform: 'capitalize',
    padding: theme.spacing(0, 1),
    fontSize: theme.typography.pxToRem(12),
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeightBold,
    ...ColorStyle(theme, ownerState),
}))

function ColorStyle(theme: Theme, {color, variant}: OwnerState) {
    const defaultStyle = {
        color: theme.palette.grey[800],
        backgroundColor: theme.palette.grey[300],
        border: 'none'
    }
    switch (color) {
        case 'default': {
            switch (variant) {
                case 'outlined':
                    return {
                        backgroundColor: 'transparent',
                        color: theme.palette.text.primary,
                        border: `1px solid ${alpha(theme.palette.grey[500], 0.32)}`
                    }
                case  'soft':
                    return {
                        color: theme.palette.mode === 'light' ? theme.palette.text.primary : theme.palette.common.white,
                        backgroundColor: alpha(theme.palette.grey[500], 0.16),
                        border: 'none'
                    }
                default:
                    return defaultStyle
            }
        }
        default: {
            switch (variant) {
                case 'filled':
                    return {
                        color: theme.palette[color].contrastText,
                        backgroundColor: theme.palette[color].main,
                        border: 'none',
                    }
                case 'outlined':
                    return {
                        backgroundColor: 'transparent',
                        color: theme.palette[color].main,
                        border: `1px solid ${theme.palette[color].main}`,
                    }

                case 'soft':
                    return {
                        color: theme.palette[color][theme.palette.mode === 'light' ? 'dark' : 'light'],
                        backgroundColor: alpha(theme.palette[color].main, 0.16),
                        border: 'none',
                    }
                default:
                    return defaultStyle
            }
        }

    }
}
