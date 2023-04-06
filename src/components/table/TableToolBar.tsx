import {TableToolBarProps} from "./types";
import {IconButton, InputAdornment, Tooltip, Typography} from "@mui/material";
import Iconify from "../iconify";
import React from "react";
import {StyledRoot, StyledSearch} from "./style";

export default function TableToolBar({searchHint,numSelected,searchText,onSearchText}:TableToolBarProps){
    const areItemsSelected = numSelected > 0
    return <StyledRoot sx={{
        ...(areItemsSelected && {
            color: (theme) => theme.palette.primary.main,
            backgroundColor: (theme) => theme.palette.primary.lighter,
        })
    }}>
        {areItemsSelected ?
            <>
                <Typography variant={'subtitle1'}>{`${numSelected} selected`}</Typography>
                <Tooltip title={"Delete"}>
                    <IconButton>
                        <Iconify icon={"eva:trash-2-fill"}/>
                    </IconButton>
                </Tooltip>
            </>
            :
            <>
                <StyledSearch
                    type={'search'}
                    value={searchText}
                    onChange={(event) => onSearchText(event.target.value)}
                    placeholder={searchHint}
                    startAdornment={<InputAdornment position="start">
                        <Iconify icon="eva:search-fill" sx={{color: 'text.disabled', width: 20, height: 20}}/>
                    </InputAdornment>

                    }
                />
                <Tooltip title={"Filter List"}>
                    <IconButton>
                        <Iconify icon={"ic:round-filter-list"} sx={{
                            color: (theme) => theme.palette.text.disabled,
                        }}/>
                    </IconButton>
                </Tooltip></>}
    </StyledRoot>
}