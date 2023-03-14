import {Theme} from "@mui/material";


export default function  Checkbox (theme:Theme){
    return {
        MuiCheckbox: {
            styleOverrides: {
               root:{
                   padding:theme.spacing(1)
               },

            },
        },
    };
}