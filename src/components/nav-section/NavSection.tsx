import {forwardRef} from "react";
import {NavItemProps, NavItemsProps} from "./types";
import {List, ListItemText} from "@mui/material";
import {NavLink as RouterLink} from "react-router-dom"
import {StyledNavItem, StyledNavItemIcon} from "./styles";

export {}

export const NavSection = forwardRef<HTMLUListElement, NavItemsProps>(({navItems}, ref) => (
    <List disablePadding sx={{p: 1}} ref={ref}>
        {navItems.map(({title, path, icon, info}) => (
            <NavItem key={title} title={title} path={path} icon={icon} info={info}></NavItem>))}
    </List>))

const NavItem = forwardRef<HTMLLIElement, NavItemProps>(({title, path, icon, info}, ref) => {
    return <>


        <StyledNavItem
            component={RouterLink}
            to={path}
            disableGutters
            sx={{
                "&.active": {
                    color: (theme) => theme.palette.text.primary,
                    backgroundColor: (theme) => theme.palette.action.selected,
                    fontWeight: (theme) => theme.typography.fontWeightBold,
                },
            }}>
            <StyledNavItemIcon>
                {icon && icon}
            </StyledNavItemIcon>

            <ListItemText disableTypography primary={title}/>
            {info && info}
        </StyledNavItem>

    </>
})