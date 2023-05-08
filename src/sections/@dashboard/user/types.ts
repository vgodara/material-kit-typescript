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

interface UserOverView {
    aboutMe: string
    residence: string,
    email: string,
    workRole: string,
    workPlace: string,
    studyPlace: string
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