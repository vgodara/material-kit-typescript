import {Avatar, Box, styled} from "@mui/material";
import {alpha} from "@mui/material/styles";
import {SvgColor} from "../../../components/svg-color/SvgColor";

export const ImageWrapper = styled(Box)(({theme}) => ({
    position: 'relative',
    paddingTop: 'calc(56.25%)',
    objectFit: 'cover'
}))
export const Image=styled('img')(({theme}) => ({
    position: "absolute",
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    objectFit: 'cover'
}))
export const ImageForeground=styled(Box)(({theme}) => ({
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    zIndex: 8,
    background:  alpha(theme.palette.grey[900], 0.64)
}))
export const StyledAvatarBackground=styled(SvgColor)(({theme})=>({
    color:theme.palette.common.white,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -26,
    margin: '0 auto',
    width: 144,
    height: 62,
    zIndex: 9
}))

export const StyledAvatar =styled(Avatar)(({theme})=>({
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -32,
    width: 64,
    height: 64,
    margin: '0 auto',
    zIndex: 9
}))