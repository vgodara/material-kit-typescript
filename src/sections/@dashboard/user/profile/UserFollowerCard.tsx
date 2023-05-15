import {Avatar, Box, Button, Card, CardContent, Stack, Typography} from "@mui/material";
import Iconify from "../../../../components/iconify";
import {faker} from "@faker-js/faker";
import React from "react";
import {UserFollowerCardProps} from "./types";

export default function UserFollowerCard({user: {id, name, avatar,isFollowed} }: UserFollowerCardProps) {
    return (<>
        <Card>
            <CardContent component={Stack} direction={'row'} alignItems={'center'}>
                <Avatar sx={{width: 48, height: 48}} src={avatar}/>
                <Box flexGrow={1} paddingLeft={2}
                     paddingRight={1} minWidth={0}>
                    <Typography variant={'subtitle2'} noWrap>{name}</Typography>
                    <Stack
                        direction={'row'}
                        alignItems={'center'}
                        justifyItems={'flex-start'}
                        spacing={0.5}
                        color={'text.secondary'}

                    >
                        <Iconify color={'inherit'} width={16} icon={'eva:pin-fill'}/>
                        <Typography variant={'body2'} noWrap>{faker.address.city()} </Typography>
                    </Stack>
                </Box>
                <Button
                    size={'small'}
                    variant={isFollowed ? 'text' : 'outlined'}
                    color={isFollowed ? 'success' : 'inherit'}
                >
                    {isFollowed ? 'Followed' : 'Follow'}
                </Button>
            </CardContent>
        </Card>
    </>)
}