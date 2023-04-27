import {Box, Card, Divider, IconButton, Stack, Typography} from "@mui/material";
import Iconify from "../../../components/iconify";
import {fShortenNumber} from "../../../utils/formatNumber";
import {Image, ImageForeground, ImageWrapper, StyledAvatar, StyledAvatarBackground} from "./styles";
import {UserCardProps} from "./types";

export default function UserCard({user:{name,avatar,cover,role,follower,following,totalPost}}:UserCardProps) {

    return <Card sx={{
        textAlign: 'center',
        borderRadius:(theme)=>theme.spacing(2),
    }}>

        <ImageWrapper >
            <Image src={cover}/>
            <ImageForeground />
            <StyledAvatarBackground  src={"/assets/icons/shape-avatar.svg"} />
            <StyledAvatar src={avatar}/>
        </ImageWrapper>

        <Typography sx={{margin: (theme) => theme.spacing(6, 0, 0.5, 0)}}
                    variant={'subtitle1'}>{name}</Typography>
        <Typography color={'text.secondary'} variant={'body2'}>{role}</Typography>
        <Stack marginTop={1} marginBottom={3} direction={'row'} justifyContent={'center'} alignItems={'center'}>

            <IconButton><Iconify icon={'eva:facebook-fill'} color={'#1877F2'}/></IconButton>
            <IconButton><Iconify icon={'ant-design:instagram-filled'} color={'#e02d69'}/></IconButton>
            <IconButton><Iconify icon={'eva:linkedin-fill'} color={'#006097'}/></IconButton>
            <IconButton><Iconify icon={'eva:twitter-fill'} color={'#1C9CEA'}/></IconButton>
        </Stack>
        <Divider sx={{borderStyle: 'dashed'}} variant={"fullWidth"}/>
        <Box  sx={{
            display: 'grid',
            gridTemplateColumns:'repeat(3, 1fr)',
            py:3
        }}>
            <Box textAlign={'center'}>
                <Typography sx={{marginBottom: 0.75}} color={'text.disabled'}
                            variant={'caption'}>Follower</Typography><Typography
                variant={'subtitle1'}>{fShortenNumber(follower)}</Typography>
            </Box>
            <Box textAlign={'center'}>
                <Typography sx={{marginBottom: 0.75}} color={'text.disabled'} variant={'caption'}>Following</Typography>
                <Typography variant={'subtitle1'}>{fShortenNumber(following)}</Typography>
            </Box>
            <Box textAlign={'center'}>
                <Typography sx={{marginBottom: 0.75}} color={'text.disabled'} variant={'caption'}>Total
                    Post</Typography>
                <Typography variant={'subtitle1'}>{fShortenNumber(totalPost)}</Typography>
            </Box>
        </Box>
    </Card>
}