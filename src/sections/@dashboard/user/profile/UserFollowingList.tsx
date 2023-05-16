import {Box, InputAdornment, Stack, Typography} from "@mui/material";
import {StyledSearch} from "./styles";
import Iconify from "../../../../components/iconify";
import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import {UserFollowingCard} from "./UserFollowingCard";
import {UserFollowingListProps} from "./types";

export default function UserFollowingList({users}: UserFollowingListProps) {
    return (<>
        <Box>
            <Stack
                my={5}
                spacing={3}
                direction={'row'}
                justifyContent={'space-between'}>
                <Typography variant={'h4'}>Friends</Typography>

                <StyledSearch
                    size={'small'}
                    variant={'outlined'}
                    placeholder={'Search followers...'}
                    InputProps={{
                        startAdornment: (<InputAdornment position="start">
                            <Iconify icon="eva:search-fill" sx={{color: 'text.disabled', width: 20, height: 20}}/>
                        </InputAdornment>)
                    }}
                />
            </Stack>
            <Grid2 container spacing={3}>
                {users.map((user, index) => (
                    <>
                        <Grid2 key={index} xs={12} sm={6} md={4}>
                            <UserFollowingCard user={user}/>
                        </Grid2>
                    </>
                ))}
            </Grid2>
        </Box>
    </>)
}

