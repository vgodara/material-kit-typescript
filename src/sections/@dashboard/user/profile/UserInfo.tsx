import {Card, Divider, Stack, Typography} from "@mui/material";

import SocialMediaLink from "./SocialMediaLink";
import UserOverView from "./UserOverView";
import {UserInfoProps} from "./types";

export default function UserInfo({userInfo: {follower, following, overView, socialMedia}}: UserInfoProps) {
    return (<>
        <Card sx={{width: 1, py: 3}} component={Stack} direction={'row'}>

            <Stack flexGrow={1} alignItems={'center'}>
                <Typography variant={'h4'}>{follower}</Typography>
                <Typography color={'text.secondary'} variant={'body2'}>Followers</Typography>
            </Stack>
            <Divider flexItem variant={'fullWidth'} orientation={'vertical'}/>
            <Stack flexGrow={1} alignItems={'center'}>
                <Typography variant={'h4'}>{following}</Typography>
                <Typography color={'text.secondary'} variant={'body2'}>Following</Typography>
            </Stack>
        </Card>
        <UserOverView overView={overView}/>
        <SocialMediaLink links={socialMedia}/>
    </>)
}