export interface User {
    role: string,
    avatarUrl: string,
    isVerified: boolean,
    name: string,
    company: string,
    id: string,
    status: string
}

export interface UserTableToolbarProps {
    numSelected: number,
    filterName: string,
    onFilterName: (filterName: string) => void
}