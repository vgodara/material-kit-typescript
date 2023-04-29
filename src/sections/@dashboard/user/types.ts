import {Variant} from "@mui/material/styles/createTypography";

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
    avatar: string,
    cover: string,
    role: string,
    follower: number,
    following: number,
    totalPost: number,
}

interface UserOverView {
    aboutMe: string
    residence: string,
    email: string,
    workRole:string,
    workPlace: string,
    studyPlace: string
}

interface BaseIconLinkList {
    icon: JSX.Element
}

interface PrimaryIconLinkList extends BaseIconLinkList {
    primaryText: string
    primaryVariant?: Variant
}

interface SecondaryIconLinkList extends BaseIconLinkList {
    secondaryText?: string
    link: string
    secondaryVariant?: Variant
}

export interface UserTableToolbarProps {
    numSelected: number,
    filterName: string,
    onFilterName: (filterName: string) => void
}

export interface UserCardProps {
    user: UserCard
}

export interface IconLinkListProps {
    items: (PrimaryIconLinkList | SecondaryIconLinkList | (PrimaryIconLinkList & SecondaryIconLinkList))[]
}

export interface UserOverViewProps {
    overView: UserOverView
}