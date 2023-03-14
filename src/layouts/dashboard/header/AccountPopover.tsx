import {Avatar, IconButton, Menu, Typography} from "@mui/material";
import React, {useState} from "react";
import {account} from "../../../temp/data";
import {alpha} from "@mui/material/styles";
import {StyledMenuItem} from "./styles";


export default function AccountPopover() {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
    const open = Boolean(anchorEl)
    const handleClose = () => {
        setAnchorEl(null)
    }
    return <>
        <IconButton sx={{
            p: 0,
            ...(open && {
                ':before': {
                    zIndex: 1,
                    content: "''",
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    position: 'absolute',
                    backgroundColor: (theme) => alpha(theme.palette.grey[900], 0.8),
                }
            }),
        }} onClick={(event) => {
            setAnchorEl(event.currentTarget)
        }}>
            <Avatar
                sx={{width: 40, height: 40}}
                src={account.photoURL}/>
        </IconButton>
        <Menu open={open} anchorEl={anchorEl} onClose={handleClose}
              anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
              transformOrigin={{vertical: 'top', horizontal: 'right'}}>
            <StyledMenuItem sx={{paddingBottom: 0}} onClick={handleClose}>
                <Typography variant={'subtitle2'}>{account.displayName} </Typography>
            </StyledMenuItem>
            <StyledMenuItem sx={{paddingTop: 0}} onClick={handleClose}>
                <Typography variant={'body2'} color={'text.secondary'} noWrap>{account.email}</Typography>
            </StyledMenuItem >
            <StyledMenuItem sx={{paddingTop: 0}} divider></StyledMenuItem>
            <StyledMenuItem onClick={handleClose}>
                <Typography variant={'body2'}>Home</Typography>
            </StyledMenuItem>
            <StyledMenuItem onClick={handleClose}>
                <Typography variant={'body2'}>Profile</Typography>
            </StyledMenuItem >
            <StyledMenuItem onClick={handleClose}>
                <Typography variant={'body2'}> Setting</Typography>
            </StyledMenuItem>
            <StyledMenuItem sx={{paddingTop: 0}} divider></StyledMenuItem>
            <StyledMenuItem onClick={handleClose}>
                <Typography variant={'body2'}>Logout</Typography>
            </StyledMenuItem>
        </Menu>
    </>
}