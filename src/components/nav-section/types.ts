export interface NavItemProps {
    title: string
    path: string
    icon: JSX.Element
    info?: string
}
export interface NavItemsProps{
    navItems:NavItemProps[]
}