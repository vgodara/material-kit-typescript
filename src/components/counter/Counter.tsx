import CounterProps from "./types";
import {IconButton, InputAdornment, styled, TextField} from "@mui/material";
import Iconify from "../iconify";
import {useState} from "react";

const StyledTextField = styled(TextField)(({theme}) => ({
    '& .MuiInputBase-root': {
        padding: theme.spacing(0),
    },
    '& .MuiInputBase-input': {
        padding: theme.spacing(0.75,0)

    },
    '& .MuiFormHelperText-root': {
        textAlign: 'right',
       margin:theme.spacing(1,0,0,0)
    }
}))
export default function Counter({
                                    initial = 0,
                                    min = Number.MIN_SAFE_INTEGER,
                                    max = Number.MAX_SAFE_INTEGER,
                                    helperText,
                                    setQuantity
                                }: CounterProps) {
    const [value, setValue] = useState(initial)
    const incrementValue = () => setValue(prevState => {
        const updatedValue = prevState + 1
        setQuantity(updatedValue)
        return updatedValue
    })
    const decrementValue = () => setValue(prevState => {
        const updatedValue = prevState - 1
        setQuantity(updatedValue)
        return updatedValue
    })

    return <StyledTextField type={'button'}
                      size={'small'}
                      helperText={helperText}
                      value={value}
                      InputProps={{
                          startAdornment: (<InputAdornment
                              position={'start'}
                              component={IconButton}
                              onClick={decrementValue}
                              disabled={value <= min}
                          ><Iconify width={16} icon={'eva:minus-fill'}/>
                          </InputAdornment>),
                          endAdornment: (<InputAdornment
                              position={'end'}
                              component={IconButton}
                              onClick={incrementValue} disabled={value >= max}
                          ><Iconify width={16} icon={'eva:plus-fill'}/>
                          </InputAdornment>)
                      }}

    />

}