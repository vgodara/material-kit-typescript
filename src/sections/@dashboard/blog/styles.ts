import {Avatar, Box, Link, styled} from "@mui/material";
import {alpha} from "@mui/material/styles";
import {getKeys} from "../../../utils/typeScript";
import {SvgColor} from "../../../components/svg-color/SvgColor";

interface PostProps {
    latestPostLarge: boolean
    latestPost: boolean
}


const postPropKeys = getKeys<PostProps>({
    latestPost: true,
    latestPostLarge: true
})
export const StyledCardMedia = styled(Box, {
    shouldForwardProp: (propName: string) => !postPropKeys.includes(propName)
})<PostProps>(({latestPostLarge, latestPost, theme}) => ({
    position: 'relative',
    paddingTop: 'calc(100%*3/4)',
    ...((latestPostLarge || latestPost) &&
        {
            paddingTop: 'calc(100%*4/3)',
            "&:after": {
                position: 'absolute',
                top: 0,
                content: "''",
                width: '100%',
                height: '100%',
                backgroundColor: alpha(theme.palette.grey[900], 0.72)
            }
        }),
    ...(latestPostLarge && {
        [theme.breakpoints.up("xs")]: {
            paddingTop: 'calc(100% * 4 / 3)',
        },
        [theme.breakpoints.up("sm")]: {
            paddingTop: 'calc(100% * 3 / 4.66)',
        },
    })
}))
export const StyledCover = styled("img")(
    {
        position: 'absolute',
        top: "0",
        width: "100%",
        height: "100%",
        objectFit: 'cover',
        display: 'block',
    }
)

export const StyledAvatar = styled(Avatar, {
    shouldForwardProp: (propName: string) => !postPropKeys.includes(propName)
})<PostProps>(({latestPostLarge, latestPost, theme}) => ({
    width: 32,
    height: 32,
    zIndex: 9,
    position: 'absolute',
    bottom: -16,
    left: 24,
    ...((latestPostLarge || latestPost) && {
        top: 24,
        left: 24,
        width: 40,
        height: 40,
    })
}))
// @ts-ignore
// @ts-ignore
export const StyledAvatarBackground = styled(SvgColor, {
    shouldForwardProp: (propName: string) => !postPropKeys.includes(propName)
})<PostProps>(({latestPostLarge, latestPost, theme}) => ({
    width: 80,
    height: 36,
    zIndex: 9,
    position: 'absolute',
    bottom: -15,
    left: 0,
    color:theme.palette.background.paper,
    ...((latestPostLarge || latestPost) && {display: 'none'})
}))
export const StyledTitle = styled(Link, {
    shouldForwardProp: (propName: string) => !postPropKeys.includes(propName)
})<PostProps>(({latestPostLarge, latestPost, theme}) => ({
    color: 'inherit',
    height: 44,
    ...(latestPostLarge && {height: 60}),
    ...((latestPostLarge || latestPost) && {
        color: theme.palette.common.white,
    })
}))