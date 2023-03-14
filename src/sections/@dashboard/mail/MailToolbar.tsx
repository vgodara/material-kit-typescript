import {Box, Checkbox, IconButton, InputAdornment, TextField, Toolbar, Tooltip, Typography} from "@mui/material";
import Iconify from "../../../components/iconify";
import React from "react";


interface MailToolbarProps {
    onOpenNav:()=>void,
    totalMail: number,
    currentMail: [number,number],
    onNextPageClick: () => void,
    onPreviousPageClick: () => void
    filterName:string,
    onFilterName:(value:string)=>void
}

export default function MailToolbar({onOpenNav, filterName,onFilterName, totalMail, currentMail, onNextPageClick, onPreviousPageClick}: MailToolbarProps) {
    return <>
        <Toolbar disableGutters sx={{px: 2, height: 80, flexShrink: 0}}>
            <IconButton
                sx={{
                    mr: 1,
                    color: 'text.primary',
                    display: { md: 'none' },
                }}
                onClick={onOpenNav}
            >
                <Iconify icon="eva:menu-2-fill" />
            </IconButton>
            <Checkbox sx={{p: 1}} color={'default'}></Checkbox>
            <IconButton>
                <Iconify icon={'eva:refresh-outline'}/>
            </IconButton>
            <IconButton>
                <Iconify icon={'eva:collapse-outline'}/>
            </IconButton> <IconButton>
            <Iconify icon={'eva:more-vertical-fill'}/>
        </IconButton>
            <Box flexGrow={1}/>
            <TextField
                value={filterName}
                onChange={(event)=>onFilterName(event.target.value)}
                placeholder={'Search'}
                type={'search'}
                size={'small'}
                sx={{maxWidth: 180}}
                InputProps={{
                    startAdornment: (<InputAdornment position={'start'}>
                        <Iconify color={'text.disabled'} icon={'eva:search-fill'}/>
                    </InputAdornment>)
                }}
            />
            <Typography color={'text.secondary'} variant={'body2'} sx={{ml: 2}}>{currentMail[0]} - {currentMail[1]} of {totalMail}</Typography>
            <Tooltip title={'Previous Page'}>
                <IconButton onClick={onPreviousPageClick}>
                    <Iconify icon={'eva:arrow-ios-back-fill'}/>
                </IconButton>
            </Tooltip>
            <Tooltip title={'Next Page'}>
                <IconButton onClick={onNextPageClick}>
                    <Iconify icon={'eva:arrow-ios-forward-fill'}/>
                </IconButton>
            </Tooltip>
        </Toolbar>
    </>
}