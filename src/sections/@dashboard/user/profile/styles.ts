import {styled, TextField} from "@mui/material";

export const Image=styled('img')(({theme}) => ({
    position: "absolute",
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    objectFit: 'cover'
}))
export const StyledSearch = styled(TextField)(({theme}) => ({
    '& .MuiOutlinedInput-root': {
        width: 220,
        transition: theme.transitions.create(['box-shadow', 'width'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.short,
        }),
        borderRadius: theme.spacing(1),
        border: `1px solid ${theme.palette.text.disabled}`,
        '&.Mui-focused': {
            width: 280,
            boxShadow: theme.customShadows.z20,

        },
        '>fieldset': {
            display: 'none'
        }
    }
}))
