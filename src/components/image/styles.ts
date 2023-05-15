import {Box, styled} from "@mui/material";

export const ImageWithOverlayWrapper = styled(Box,{
})(({theme}) => ({
    position:'relative',
    '>img': {
        width:'100%',
        height:'100%',
        objectFit:'cover',
        zIndex: 1,
    },
    '>div':{
        position:'absolute',
        inset:0,
        zIndex: 2,
    }
}))