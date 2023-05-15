import {Box, Typography} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import React from "react";
import UserPostOverView from "./UserPostOverView";
import {UserPostListProps} from "./types";

export default function UserPostsList({posts}:UserPostListProps) {
    return (<>
        <Box>
            <Typography my={5} variant={'h4'}>Followers</Typography>
            <Grid2 container spacing={3}>
                {posts.map((post, index) => (<>
                    <Grid2 key={index} xs={12} sm={6} md={4}
                    ><UserPostOverView post={post}/>
                    </Grid2>
                </>))}
            </Grid2>
        </Box>
    </>)
}