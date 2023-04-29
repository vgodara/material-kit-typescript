import {Link, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {Link as RouterLink} from 'react-router-dom'
import {IconLinkListProps} from "./types";
import {Variant} from "@mui/material/styles/createTypography";

export default function IconLinkList({ items}: IconLinkListProps) {
    return (

        <List>
            {items.map((item, index) => (
                <IconLinkItem key={index} item={item}/>
            ))}
        </List>
    );
}

function IconLinkItem({item}: {
    item: {
        icon: JSX.Element,
        primaryText?: string,
        primaryVariant?: Variant,
        secondaryText?: string
        link?: string
        secondaryVariant?: Variant
    }
}) {
    const {icon, primaryText, primaryVariant, secondaryText, link, secondaryVariant} = item
    return (<ListItem disableGutters color={'inherit'}>
        <ListItemIcon sx={{color: 'inherit', minWidth: 0, mr: 2}}>
            {icon}
        </ListItemIcon>
        <ListItemText sx={{display: 'flex'}}>
            {
                <Typography variant={primaryVariant}>{primaryText && `${primaryText}\u00A0`} {link != null &&
                    <Link
                        color={'inherit'}
                        underline={'hover'}
                        component={RouterLink}
                        to={link}
                        variant={secondaryVariant}>
                        {secondaryText ?? link}
                    </Link>}</Typography>}


        </ListItemText>
    </ListItem>)
}