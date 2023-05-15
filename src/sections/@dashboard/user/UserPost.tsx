import {
    Avatar,
    AvatarGroup,
    Box,
    Card,
    CardContent,
    CardHeader,
    Checkbox,
    FormControlLabel,
    IconButton,
    InputAdornment,
    OutlinedInput,
    Paper,
    Stack,
    Typography
} from "@mui/material";
import {faker} from "@faker-js/faker";
import {fDate} from "../../../utils/formatTime";
import Image from "mui-image";
import Iconify from "../../../components/iconify";
import {fShortenNumber} from "../../../utils/formatNumber";
import {BasicUserInfo, Interaction, isComment, isLike, UserPostProps} from "./types";

export default function UserPost({post: {title, cover, user, createdAt, interactions}}: UserPostProps) {

    return <Card>
        <Header displayName={user.name} avatar={user.avatar} date={createdAt}/>
        <CardContent>
            <Typography>{title}</Typography>
            <Cover image={cover}/>
            <Interactions interactions={interactions}/>

        </CardContent>

    </Card>
}

function Header({displayName, avatar, date}: { displayName: string, avatar: string, date: Date }) {
    return (<>
        <CardHeader titleTypographyProps={{variant: 'subtitle2'}}
                    subheaderTypographyProps={{variant: 'caption'}}
                    avatar={(<Avatar src={avatar}/>)}
                    title={displayName}
                    subheader={fDate(date)}/>
    </>)
}

function Cover({image}: { image: string }) {
    return (<>
        <Box sx={{
            mx: -2,
            my: 1,
            overflow: 'hidden',
            borderRadius: (theme) => theme.spacing(1),
            position: 'relative',
            paddingTop: 'calc(56.2%)',
        }}>

            <Image fit={'cover'} style={{position: 'absolute', left: 0, top: 0}} src={image}/>


        </Box>
    </>)
}


function Interactions({interactions}: { interactions: Interaction[] }) {
    const likes = interactions.filter(isLike)
    const comments = interactions.filter(isComment)
    return (<>
        <Likes likes={likes}/>
        <Stack spacing={1.5}>
            {comments.map((comment, index) => (<Comment comment={comment} key={index}/>))}
        </Stack>
        <AddComment/>
    </>)
}

function Likes({likes}: { likes: { createdAt: Date, user: BasicUserInfo }[] }) {
    return (<>
        <Stack direction={'row'} justifyContent={'space-between'} sx={{pt: 2, pb: 3}}>
            <Stack direction={'row'} alignItems={'center'}>
                <FormControlLabel control={
                    <Checkbox
                        icon={(<Iconify width={24} icon={'eva:heart-fill'}/>)}
                        checkedIcon={<Iconify width={24} icon={'eva:heart-fill'} color={'#ff5630'}/>}/>
                } disableTypography label={(
                    <Typography variant={'body2'}>{fShortenNumber(likes.length)}</Typography>)}/>
                <AvatarGroup sx={(theme) => ({
                    '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        typography: 'body2',
                        alignContent: 'center',
                        backgroundColor: theme.palette.primary.main
                    }
                })} max={3}>
                    {likes.map((like, index) => (
                        <Avatar sx={{width: 32, height: 32}} key={index} src={like.user.avatar}/>
                    ))}
                </AvatarGroup>
            </Stack>
            <Stack direction={'row'}>
                <IconButton>
                    <Iconify icon={'eva:message-square-fill'}/>
                </IconButton>
                <IconButton>
                    <Iconify icon={'eva:share-fill'}/>
                </IconButton>
            </Stack>

        </Stack></>)
}

function Comment({comment}: { comment: { comment: string, user: BasicUserInfo, createdAt: Date } }) {
    return (<>
        <Stack direction={'row'} spacing={2}>
            <Avatar sx={{flexShrink: 0}} src={comment.user.avatar}/>
            <Paper sx={{
                flexGrow: 1,
                backgroundColor: (theme) => theme.palette.background.neutral,
                borderRadius: (theme) => theme.spacing(1),
                padding: 1.5,
            }}>
                <Stack mb={0.5} direction={{xs: 'column', sm: 'row'}} alignItems={{sm: 'center'}}
                       justifyContent={'space-between'}>
                    <Typography variant={'subtitle2'}>{comment.user.name}</Typography>
                    <Typography color={'text.disabled'} variant={'caption'}>{fDate(comment.createdAt)}</Typography>
                </Stack>
                <Typography color={'text.secondary'} variant={'body2'}>{comment.comment}</Typography>
            </Paper>
        </Stack>
    </>)
}

function AddComment() {
    return (<>
        <Stack direction={'row'} mt={1.5} spacing={2}>
            <Avatar src={faker.image.avatar()}/>
            <OutlinedInput
                fullWidth
                placeholder={'Write a comment'}
                size={'small'}
                endAdornment={(<InputAdornment position={"end"}>
                    <IconButton>
                        <Iconify icon={'ic:round-add-photo-alternate'}/>
                    </IconButton>
                    <IconButton><Iconify icon={'eva:smiling-face-outline'}/></IconButton>
                </InputAdornment>)
                }
            />

        </Stack>
    </>)
}

