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
    id: string,
    name: string,
    avatar: string,
}

export interface Interaction {
    type: 'like' | 'comment'
    createdAt: Date,
    user: BasicUserInfo
}

interface Like extends Interaction {
    type: 'like'
}

export const isLike = (interaction: Interaction): interaction is Like => interaction.type === "like";

export interface Comment extends Interaction {
    type: 'comment'
    comment: string

}

export const isComment = (interaction: Interaction): interaction is Comment => interaction.type === "comment";

interface Post {
    id: string
    cover: string
    title: string,
    user: BasicUserInfo,
    createdAt: Date
    interactions: Interaction[]
}

interface UserInfo {
    follower: number,
    following: number,
    overView: UserOverView
    socialMedia: SocialMediaLinks
}

interface UserFollowerCard extends BasicUserInfo {
    isFollowed: boolean
}

interface UserFollowingCard extends BasicUserInfo {
    role: string
    socialMedia: SocialMediaLinks
}

export interface SocialMediaLinkProps {
    links: SocialMediaLinks
}


export interface UserOverViewProps {
    overView: UserOverView
}

export interface UserPostProps {
    post: Post
}

export interface UserPostOverviewProps {
    post: PostOverView
}

export interface UserInfoProps {
    userInfo: UserInfo
}

export interface UserProfileProps {
    userInfo: UserInfo
    posts: Post[]
}

export interface UserPostListProps {
    posts: PostOverView[]
}

export interface UserFollowerCardProps {
    user: UserFollowerCard

}

export interface UserFollowerListProps {
    users: UserFollowerCard[]
}

export interface UserFollowingCardProps {
    user:UserFollowingCard
}

export interface UserFollowingListProps{
    users:UserFollowingCard[]
}