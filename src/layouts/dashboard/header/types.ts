export type Notification = {
    id: string, title: string,
    description: string,
    avatar: string,
    type: 'friend_interactive',
    createdAt: Date,
    isUnRead: boolean
} | {
    id: string,
    title: string,
    description: string,
    avatar: null,
    type: 'order_placed' | 'order_shipped' | 'mail' | 'chat_message',
    createdAt: Date,
    isUnRead: boolean
}

export type Lang = {
    value: string,
    label: string,
    icon: string
}

export interface HeaderProps {
    onOpenNav: () => void
}