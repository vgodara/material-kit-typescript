import {IconButton, InputAdornment, Tooltip, Typography} from "@mui/material";
import React from "react";
import Iconify from "../../../components/iconify";
import {StyledRoot, StyledSearch} from "./style";
import {UserTableToolbarProps} from "./types";


export default function UserListToolbar({numSelected, filterName, onFilterName}: UserTableToolbarProps) {
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
                    value={filterName}
                    onChange={(event) => onFilterName(event.target.value)}
                    placeholder="Search user..."
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