import {AppTasksProps} from "./types";
import {
    Card,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    IconButton,
    ListItemIcon,
    ListItemText,
    MenuList,
    Paper,
    Popover,
    Stack,
    styled,
    Typography,
} from "@mui/material";
import React, {useState} from "react";
import Iconify from "../../../components/iconify";
import {StyledListItemIcon, StyledMenuItem} from "./styles";

export default function AppTasks({title, subHeader, list, ...other}: AppTasksProps) {
    return <><Card sx={{padding: 3, paddingBottom: 0, width: 1}}>
        <FormControl sx={{width: 1}}>
            <FormLabel>
                <Typography
                    sx={{color: (theme) => theme.palette.text.primary}}
                    variant={'h6'}
                    gutterBottom>{title}</Typography>
            </FormLabel>
            <FormGroup sx={{mt:-1,mx:-1}}>
                {list.map(({id, label}) => (
                    <AppTask key={id} id={id} label={label}/>
                ))}
            </FormGroup>
        </FormControl>
    </Card>
    </>

}

function AppTask({id, label}: { id: string, label: string }) {
    const StyledListItemText = styled((props) => <ListItemText
        primaryTypographyProps={{variant: 'body2'}} {...props}/>)(() => ({})) as typeof ListItemText
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
    const handleClose = (_: React.MouseEvent) => {
        setAnchorEl(null)
    }
    const [checked, setChecked] = useState(false)
    const open = Boolean(anchorEl)
    return <>
        <Stack direction={'row'} sx={{
            py: 0.75,
            ...(checked && {
                textDecoration: 'line-through',
                color: (theme) => theme.palette.text.disabled
            })
        }}>
            <FormControlLabel sx={{
                flexGrow: 1,
                m: 0,

            }}
                              key={id}
                              control={<Checkbox checked={checked} onChange={(_, checked) => setChecked(checked)}/>}
                              label={label}
            />
            <IconButton size="large" color="inherit" sx={{opacity: 0.48}}
                        onClick={(event) => setAnchorEl(event.currentTarget)}>
                <Iconify icon={'eva:more-vertical-fill'}/>
            </IconButton>
        </Stack>
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}

            anchorOrigin={{vertical: 'top', horizontal: 'left'}}
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
        >
            <Paper sx={{p: 1}}>
                <MenuList>
                    <StyledMenuItem>
                        <StyledListItemIcon>
                            <Iconify icon={'eva:checkmark-circle-2-fill'}/>
                        </StyledListItemIcon>
                        <StyledListItemText>Mark Complete</StyledListItemText>
                    </StyledMenuItem>
                    <StyledMenuItem>
                        <StyledListItemIcon>
                            <Iconify icon={'eva:edit-fill'}/>
                        </StyledListItemIcon>
                        <StyledListItemText>Edit</StyledListItemText>
                    </StyledMenuItem>
                    <StyledMenuItem>
                        <StyledListItemIcon>
                            <Iconify icon={'eva:share-fill'}/>
                        </StyledListItemIcon>
                        <StyledListItemText>Share</StyledListItemText>

                    </StyledMenuItem>
                    <Divider sx={{borderStyle: 'dashed'}}/>
                    <StyledMenuItem sx={{color: (theme) => theme.palette.error.main}}>
                        <ListItemIcon sx={{color: (theme) => theme.palette.error.main}}>
                            <Iconify icon={'eva:trash-2-outline'}/>
                        </ListItemIcon>
                        <StyledListItemText>Delete</StyledListItemText>
                    </StyledMenuItem>
                </MenuList>
            </Paper>
        </Popover>
    </>
}