export interface User {
    role: string,
    avatarUrl: string,
    isVerified: boolean,
    name: string,
    company: string,
    id: string,
    status: string
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
export interface UserTableToolbarProps {
    numSelected: number,
    filterName: string,
    onFilterName: (filterName: string) => void
}

export interface UserCardProps{
    user:UserCard
}