import {Box} from "@mui/material";
import {ImageWithOverlayWrapper} from "./styles";
import {ImageWithOverlayProps} from "./types";
import {bgBlur} from "../../utils/cssStyles";

export default function ImageWithOverlay({overlayColor,src,sx}:ImageWithOverlayProps){
    return (<>
        <ImageWithOverlayWrapper sx={{...sx}}>
            <Box component={"img"} src={src}/>
            <Box sx={(theme)=>({...bgBlur({color:overlayColor(theme),opacity:0.8})})}/>
        </ImageWithOverlayWrapper>
    </>)
}