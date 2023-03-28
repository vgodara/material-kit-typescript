import CounterProps from "./types";
import {IconButton, InputAdornment, OutlinedInput} from "@mui/material";
import Iconify from "../iconify";
import {useState} from "react";

export default function Counter({
                                    initial = 0,
                                    min = Number.MIN_SAFE_INTEGER,
                                    max = Number.MAX_SAFE_INTEGER
                                }: CounterProps) {
    const [value, setValue] = useState(initial)
    const incrementValue = () => setValue(prevState => (prevState + 1))
    const decrementValue = () => setValue(prevState => (prevState - 1))

    return <OutlinedInput type={'button'}
                          size={'small'}
                          sx={(theme)=>({
                              px:theme.spacing(0.6)
                          })}
                          value={value}
                          startAdornment={<InputAdornment
                              position={'start'}
                              component={IconButton}
                              onClick={decrementValue}
                              disabled={value <= min}
                          ><Iconify width={16} icon={'eva:minus-fill'}/>
                          </InputAdornment>}
                          endAdornment={<InputAdornment
                              position={'end'}
                              component={IconButton}
                              onClick={incrementValue} disabled={value >= max}
                          ><Iconify width={16} icon={'eva:plus-fill'}/>
                          </InputAdornment>}
    />

}