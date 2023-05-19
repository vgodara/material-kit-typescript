interface UserInfo {
    name: string
    emailAddress: string
    phoneNumber: string
    address: string
    city: string
    state:string
    country: string
    pinCode: string
    aboutMe: string
}
export interface UpdateUserInfo{
    name?: string
    emailAddress?: string
    phoneNumber?: string
    address?: string
    city?: string
    state?:string
    country?: string
    pinCode?: string
    aboutMe?: string
}

export interface UpdateInfoProps {
    info: UserInfo
    onUpdate: (newInfo: UpdateUserInfo) => void
}

export interface UpdateProfilePicProps{
    image:string
    isProfilePublic:boolean
    onImageUpdate:(value:string)=>void
    onProfileVisibilityUpdate:(value:boolean)=>void
}