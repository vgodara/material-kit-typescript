import {useState} from "react";
import {Box, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Typography} from "@mui/material";
import {Lang} from "./types";


const LANGS: Lang[] = [
    {
        value: 'en',
        label: 'English',
        icon: '/assets/icons/ic_flag_en.svg',
    },
    {
        value: 'de',
        label: 'German',
        icon: '/assets/icons/ic_flag_de.svg',
    },
    {
        value: 'fr',
        label: 'French',
        icon: '/assets/icons/ic_flag_fr.svg',
    },
];


export default function LanguagePopover() {
    const [selected, setSelected] = useState(LANGS[0])
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
    const handleClose = () => setAnchorEl(null)
    return <><IconButton sx={{
        p: 0,
        width: 44,
        height: 44,
    }} onClick={(event) => setAnchorEl(event.currentTarget)}> <Box component={'img'} src={selected.icon}/> </IconButton>
        <Menu open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={handleClose} PaperProps={{
            sx: {
                mt: 1.5,
                width: 180,
            },
        }}>
            {LANGS.map((lang, index) => (
                <MenuItem
                    key={index}
                    onClick={() => {
                        setAnchorEl(null)
                        setSelected(lang)
                    }} selected={lang === selected}>
                    <ListItemIcon sx={{mr: 2}}><Box component={'img'} src={lang.icon}/></ListItemIcon>
                    <ListItemText><Typography variant={'body2'}>{lang.label}</Typography></ListItemText>
                </MenuItem>
            ))}
        </Menu>
    </>

}