import {ListItemButton, ListItemIcon, styled} from "@mui/material";

export const StyledNavItem = styled(ListItemButton)(({theme}) => ({
    ...theme.typography.body2,
    height: 48,
    position: 'relative',
    textTransform: 'capitalize',
    color: theme.palette.text.secondary,
    borderRadius: theme.shape.borderRadius,
})) as typeof ListItemButton
export const StyledNavItemIcon = styled(ListItemIcon)({
    width: 22,
    height: 22,
    color: 'inherit',
}) as typeof ListItemIcon;

