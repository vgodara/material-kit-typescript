import React, {useState} from "react";
import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    IconButton,
    Link,
    MenuItem,
    Popover,
    Stack,
    Typography
} from "@mui/material";
import Iconify from "../../../../components/iconify";
import {UserFollowingCardProps} from "./types";

export function UserFollowingCard({user: {name, avatar, role}}: UserFollowingCardProps) {
    const [open, setOpen] = useState<HTMLElement | null>(null)

    function handleCloseMenu() {
        setOpen(null)
    }

    return (<>
        <Card>
            <CardHeader
                action={(<IconButton onClick={(event) => {
                    setOpen(event.currentTarget)
                }}>
                    <Iconify icon={'eva:more-vertical-fill'}/>
                </IconButton>)}/>
            <CardContent
                component={Stack}
                alignItems={'center'}
                justifyItems={'center'}>
                <Avatar sx={{marginBottom: 3, width: 64, height: 64}} src={avatar}/>
                <Link
                    color={'inherit'}
                    variant={'subtitle2'}
                    underline={'hover'}
                >
                    {name}
                </Link>
                <Typography
                    marginTop={0.5}
                    marginBottom={1}
                    color={'text.secondary'}
                    variant={'body2'}>{role}</Typography>
                <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>

                    <IconButton><Iconify icon={'eva:facebook-fill'} color={'#1877F2'}/></IconButton>
                    <IconButton><Iconify icon={'ant-design:instagram-filled'} color={'#e02d69'}/></IconButton>
                    <IconButton><Iconify icon={'eva:linkedin-fill'} color={'#006097'}/></IconButton>
                    <IconButton><Iconify icon={'eva:twitter-fill'} color={'#1C9CEA'}/></IconButton>
                </Stack>
                <Popover
                    open={Boolean(open)}
                    anchorEl={open}
                    onClose={handleCloseMenu}
                    anchorOrigin={{vertical: 'top', horizontal: 'left'}}
                    transformOrigin={{vertical: 'top', horizontal: 'right'}}
                    PaperProps={{
                        sx: {
                            p: 1,
                            '& .MuiMenuItem-root': {
                                px: 1,
                                typography: 'body2',
                                borderRadius: 0.75,
                            },
                        },
                    }}
                ><MenuItem sx={{color: 'error.main'}}>
                    <Iconify icon={'eva:trash-2-outline'} sx={{mr: 2}}/>
                    Delete
                </MenuItem>
                    <MenuItem>
                        <Iconify icon={'eva:edit-fill'} sx={{mr: 2}}/>
                        Edit
                    </MenuItem>
                </Popover>
            </CardContent>
        </Card>
    </>)
}