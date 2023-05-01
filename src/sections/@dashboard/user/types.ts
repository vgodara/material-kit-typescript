export interface User {
    role: string,
    avatarUrl: string,
    isVerified: boolean,
    name: string,
    company: string,
    id: string,
    status: string
}
export interface BasicUserInfo {
    id:string,
    name:string,
    avatar:string
}

interface UserCard {
    name: string,
    avatar:string,
    cover:string,
    role: string,
    follower:number,
    following:number,
    totalPost:number,
}

interface UserOverView {
    aboutMe: string
    residence: string,
    email: string,
    workRole: string,
    workPlace: string,
    studyPlace: string
}

interface SocialMediaLinks {
    facebook: string,
    instagram: string,
    linkedin: string,
    twitter: string
}




export interface Interaction  {
    type:'like'|'comment'
    date:Date,
    userInfo:BasicUserInfo
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
    media:string
    content:string,
    user:BasicUserInfo,
    date:Date
    interactions:Interaction[]
}

export interface UserTableToolbarProps {
    numSelected: number,
    filterName: string,
    onFilterName: (filterName: string) => void
}

export interface UserCardProps{
    user:UserCard
}


export interface UserOverViewProps {
    overView: UserOverView
}

export interface SocialMediaLinkProps {
    links: SocialMediaLinks
}

export interface UserPostProps {
    post:Post
}