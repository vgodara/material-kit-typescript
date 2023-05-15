import {styled} from "@mui/material";

export const Image=styled('img')(({theme}) => ({
    position: "absolute",
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    objectFit: 'cover'
}))