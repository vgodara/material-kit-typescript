import {forwardRef} from "react";
import {ColorSinglePickerProps} from "./types";
import {Radio, RadioGroup} from "@mui/material";
import Icon from "./Icon";


export const ColorSinglePicker = forwardRef<unknown, ColorSinglePickerProps>(({colors, ...other}, ref) => {
    return <RadioGroup ref={ref} row {...other} >
        {colors.map((color) => {
            const whiteColor = color === '#FFFFFF' || color === 'white'

            return <Radio
                key={color}
                value={color}
                color={"default"}
                icon={<Icon whiteColor={whiteColor}/>}
                checkedIcon={<Icon checked whiteColor={whiteColor}/>}
                sx={{
                    color,
                    '&:hover': {opacity: 0.72},
                    '& svg': {width: 12, height: 12},
                }}/>
        })}
    </RadioGroup>
})