import {Stack} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import UserInfo from "./UserInfo";
import UserCreatePost from "./UserCreatePost";
import UserPost from "./UserPost";
import {UserProfileProps} from "./types";

export default function UserProfile({userInfo,posts}:UserProfileProps) {
    return (<>
        <Grid2 paddingTop={3} container spacing={{xs: 3}}>
            <Grid2 xs={12} md={4} component={Stack} spacing={3} direction={'column'}>
                <UserInfo userInfo={userInfo}/>
            </Grid2>
            <Grid2 xs={12} md={8} component={Stack} spacing={3} direction={'column'}>
                <UserCreatePost/>
                {posts.map((post,index)=>(
                    <UserPost post={post} key={index}/>
                ))}
            </Grid2>

        </Grid2>
    </>)
}