import {BlogPostProps} from "./types";
import {Box, Card, CardContent, Stack, Typography} from "@mui/material";
import {fDate} from "../../../utils/formatTime";
import Iconify from "../../../components/iconify";
import {fShortenNumber} from "../../../utils/formatNumber";
import {StyledAvatar, StyledAvatarBackground, StyledCardMedia, StyledCover, StyledTitle} from "./styles";
import Grid2 from "@mui/material/Unstable_Grid2";


export default function BlogPostCard({
                                         index,
                                         post: {cover, title, view, comment, share, author, createdAt}
                                     }: BlogPostProps) {
    const latestPostLarge = index === 0
    const latestPost = index === 1 || index === 2
    const POST_INFO = [
        {number: comment, icon: 'eva:message-circle-fill'},
        {number: view, icon: 'eva:eye-fill'},
        {number: share, icon: 'eva:share-fill'},
    ];
    return <>
        <Grid2 xs={12} sm={latestPostLarge ? 12 : 6} md={latestPostLarge ? 6 : 3}>
            <Card>
                <StyledCardMedia latestPostLarge={latestPostLarge} latestPost={latestPost}>
                    <StyledCover
                        alt={title}
                        src={cover}
                    />
                    <StyledAvatarBackground
                        src="/assets/icons/shape-avatar.svg"
                        latestPostLarge={latestPostLarge}
                        latestPost={latestPost}
                    />
                    <StyledAvatar
                        latestPostLarge={latestPostLarge}
                        latestPost={latestPost}
                        src={author.avatarUrl} alt={author.name}/>
                </StyledCardMedia>
                <CardContent sx={{
                    pt: 4,
                    ...((latestPostLarge || latestPost) && {
                        bottom: 0,
                        width: '100%',
                        position: 'absolute',
                    }),
                }}>
                    <Typography
                        sx={{display:'block'}}
                        variant={'caption'}
                        color={'text.disabled'}
                        gutterBottom>
                        {fDate(createdAt)}
                    </Typography>
                    <StyledTitle underline='hover'
                                 variant={latestPostLarge?'h5':'subtitle2'}
                                 latestPostLarge={latestPostLarge}
                                 latestPost={latestPost}
                    >{title}
                    </StyledTitle>
                    <Stack direction={'row'} justifyContent={'flex-end'} sx={{alignSelf: 'flex-end', mt: 3}}>
                        {POST_INFO.map((info, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    ml: index === 0 ? 0 : 1.5,
                                    color: (theme) => theme.palette.text.disabled,
                                }}
                            >
                                <Iconify icon={info.icon} sx={{width: 16, height: 16, mr: 0.5}}/>
                                <Typography variant="caption"
                                            component={'span'}>{fShortenNumber(info.number)}</Typography>
                            </Box>
                        ))}
                    </Stack>
                </CardContent>
            </Card>
        </Grid2>
    </>

}