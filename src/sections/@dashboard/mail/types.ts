export type NavItem={
    name:string,
    icon:string,
    color?:string
    count:number
    path:string
}

export interface MailNavbarProps{
    list:NavItem[]
}

export interface MailNavItemProps{
    nav:NavItem
}