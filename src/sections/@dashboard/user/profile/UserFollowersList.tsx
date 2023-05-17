import {Box, Typography} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import React from "react";
import {UserFollowerListProps} from "./types";
import UserFollowerCard from "./UserFollowerCard";

export default function UserFollowersList({users}:UserFollowerListProps) {
    return (<>
        <Box>
            <Typography my={5} variant={'h4'}>Followers</Typography>
            <Grid2 container spacing={3}>
                {users.map((user, index) => (
                    <Grid2 key={index} xs={12} sm={6} md={4}>
                        <UserFollowerCard user={user}/>
                    </Grid2>

                ))}
            </Grid2>
        </Box>
    </>)

}