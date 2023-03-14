import {MailNavItemProps} from "./types";
import {
    Button,
    Divider,
    Drawer,
    ListItemButton,
    ListItemText,
    MenuList,
    Stack,
    styled,
    Typography
} from "@mui/material";
import Iconify from "../../../components/iconify";
import Scrollbar from "../../../components/scrollbar/Scrollbar";
import React from "react";
import {NavLink as RouterLink} from "react-router-dom"
import useResponsive from "../../../hooks/useResponsive";
import {emailNav} from "../../../temp/data";
import {NavProps} from "../../../layouts/dashboard/nav/types";

const StyledButton = styled(Button)(({theme}) => ({
    fullWidth: true,
    variant: 'contained',
    color: theme.palette.common.white,
    backgroundColor: theme.palette.text.primary,
    boxShadow: 'none',
    ':hover': {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.text.primary,
    }
}))
export default function MailNavbar({openNav, onCloseNav}: NavProps) {
    const isDesktop = useResponsive('up', 'md');
    return <Drawer variant={isDesktop ? 'permanent' : undefined}
                   open={isDesktop || openNav}
                   onClose={onCloseNav}
                   PaperProps={{
                       sx: {
                           position: {md: 'relative'},
                           width: 260
                       }
                   }}>
        <Stack justifyContent={'center'} flexShrink={0} sx={{
            px: 2.5, height: 80,
        }}>
            <StyledButton
                disableElevation
                startIcon={<Iconify icon={'eva:edit-fill'}/>}>Compose</StyledButton>

        </Stack>
        <Divider variant={'fullWidth'}/>

        <Scrollbar>
            <MenuList disablePadding>
                {emailNav.map((nav, index) => (
                    <MailNavItem key={index} nav={nav}/>
                ))}
            </MenuList>
        </Scrollbar>
    </Drawer>
}

function MailNavItem({nav: {name, icon, count, color, path}}: MailNavItemProps) {
    return <ListItemButton
        component={RouterLink}
        to={path}

        sx={{
            px: 3,
            py: 1.5,
            color: (theme) => theme.palette.text.secondary,
            "&.active": {
                color: (theme) => theme.palette.text.primary,
                backgroundColor: (theme) => theme.palette.action.selected,
                fontWeight: (theme) => theme.typography.fontWeightBold,
            },
        }}>
        <Iconify width={24} color={color} icon={icon} sx={{mr: 2}}/>
        <ListItemText sx={{m: 0, flexGrow: 1}}
                      primaryTypographyProps={{typography: 'body2', textTransform: 'capitalize'}}>{name}</ListItemText>
        {count > 0 && <Typography variant={'caption'}>{count}</Typography>}
    </ListItemButton>
}