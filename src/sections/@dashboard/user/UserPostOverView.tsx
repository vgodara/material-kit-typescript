import {Box, Card, CardContent, IconButton, Stack, Typography} from "@mui/material";
import {Image} from "./styles";
import {bgBlur} from "../../../utils/cssStyles";
import {fDate} from "../../../utils/formatTime";
import {Link as RouterLink} from 'react-router-dom'
import Iconify from "../../../components/iconify";
import React from "react";
import {UserPostOverviewProps} from "./types";

export default function UserPostOverView({post: {id, title, cover, createdAt}}: UserPostOverviewProps) {
    return (<RouterLink to={'#'}>
        <Card>
            <Cover cover={cover}/>
            <CardContent sx={(theme) => ({
                display: 'flex',
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'space-between',
                left: 0,
                bottom: 0,
                right: 0,
                color: (theme) => theme.palette.common.white,
                ...(bgBlur({color: theme.palette.grey[900]}))
            })}>
                <Stack spacing={1}>
                    <Typography variant={'subtitle1'}>{title}</Typography>
                    <Typography sx={{opacity: 0.72}} variant={'body2'}>{fDate(createdAt)}</Typography>
                </Stack>
                <IconButton size="large" color="inherit">
                    <Iconify icon={'eva:more-vertical-fill'}/>
                </IconButton>
            </CardContent>
        </Card>
    </RouterLink>)
}

function Cover({cover}: { cover: string }) {
    return (<>

        <Box sx={{
            position: 'relative',
            paddingTop: 'calc(100%)',
            objectFit: 'cover'
        }}>
            <Image src={cover}/>
        </Box>
    </>)
}