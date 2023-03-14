import {Button, ClickAwayListener, IconButton, Input, InputAdornment, Slide} from "@mui/material";
import Iconify from "../../../components/iconify";
import {useState} from "react";
import {StyledFormControl} from "./styles";


export default function Searchbar() {
    const [open, setOpen] = useState(false)
    return <>
        <ClickAwayListener onClickAway={() => setOpen(false)}>
            <div>
                {!open &&
                    <IconButton onClick={() => setOpen(true)}>
                        <Iconify icon={'eva:search-fill'}
                                 width={20}
                        />
                    </IconButton>
                }
                <Slide direction={'down'} in={open} mountOnEnter unmountOnExit>
                    <StyledFormControl fullWidth>
                        <Input type={'search'}
                               placeholder={'Search...'}
                               disableUnderline
                               fullWidth
                               required
                               startAdornment={<InputAdornment position={"start"}>
                                   <Iconify icon={'eva:search-fill'}
                                            color={'text.disabled'}
                                            width={20}
                                   />
                               </InputAdornment>}
                               sx={{mr: 1, fontWeight: 'fontWeightBold'}}
                        />
                        <Button type={'submit'} variant={'contained'} color={'primary'}>Search</Button>
                    </StyledFormControl>
                </Slide>
            </div>
        </ClickAwayListener>
    </>
}