interface SocialMediaLinks {
    facebook: string,
    instagram: string,
    linkedin: string,
    twitter: string
}

interface UserOverView {
    aboutMe: string
    residence: string,
    email: string,
    workRole: string,
    workPlace: string,
    studyPlace: string
}

interface PostOverView {
    id: string,
    title: string
    cover: string
    createdAt: Date
}

export interface BasicUserInfo {
    id:string,
    name:string,
    avatar:string
}

export interface Interaction  {
    type:'like'|'comment'
    createdAt:Date,
    user:BasicUserInfo
}
interface Like extends Interaction{
    type:'like'
}
export const isLike = (interaction: Interaction): interaction is Like => interaction.type === "like";

export interface Comment extends Interaction {
    type:'comment'
    comment:string

}

export const isComment = (interaction: Interaction): interaction is Comment => interaction.type === "comment";

interface Post {
    id:string
    cover:string
    title:string,
    user:BasicUserInfo,
    createdAt:Date
    interactions:Interaction[]
}

interface UserInfo {
    follower:number,
    following:number,
    overView:UserOverView
    socialMedia:SocialMediaLinks
}

export interface SocialMediaLinkProps {
    links: SocialMediaLinks
}


export interface UserOverViewProps {
    overView: UserOverView
}
export interface UserPostProps {
    post:Post
}

export interface UserPostOverviewProps {
    post: PostOverView
}

export interface UserInfoProps {
    userInfo:UserInfo
}

export interface UserProfileProps {
    userInfo:UserInfo
    posts:Post[]
}
export interface UserPostListProps {
    posts:PostOverView[]
}