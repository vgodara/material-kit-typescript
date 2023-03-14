import {Theme} from "@mui/material";

export default function Link(theme:Theme){
   return {
       MuiLink: {
           styleOverrides: {
               root: {
                   '&[disabled]': {
                       color: theme.palette.text.disabled ,
                       pointerEvents: 'none',
                   },
               },
           },
       }
   }
}