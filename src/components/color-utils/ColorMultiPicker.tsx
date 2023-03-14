import {forwardRef} from "react";
import {ColorMultiPickerProps} from "./types";
import {Checkbox, FormControlLabel} from "@mui/material";
import Icon from "./Icon";


export const ColorMultiPicker = forwardRef<unknown, ColorMultiPickerProps>(({
                                                                                colors,
                                                                                onChangeColor,
                                                                                selected,
                                                                                ...other
                                                                            }, ref) => {

        return <>
            {colors.map((color) => {
                const whiteColor = color === '#FFFFFF' || color === 'white'
                return <FormControlLabel key={color} control={
                    <Checkbox
                        value={color}
                        color={"default"}
                        checked={selected.has(color)}
                        onChange={() => onChangeColor(color)}
                        icon={<Icon whiteColor={whiteColor}/>}
                        checkedIcon={<Icon checked={true} whiteColor={whiteColor}/>}
                        sx={{
                            color,
                            '&:hover': {opacity: 0.72},
                            '& svg': {width: 12, height: 12},

                        }}
                        {...other}

                    />
                } label={''}/>
            })}
        </>
    }
)