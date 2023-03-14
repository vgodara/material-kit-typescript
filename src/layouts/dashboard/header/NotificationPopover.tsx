import {set, sub} from "date-fns";
import {faker} from "@faker-js/faker";
import {
    Avatar,
    Badge,
    Button,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    ListSubheader,
    Menu,
    Tooltip,
    Typography
} from "@mui/material";
import Iconify from "../../../components/iconify";
import {noCase} from "change-case";
import {fToNow} from "../../../utils/formatTime";
import {useState} from "react";
import Scrollbar from "../../../components/scrollbar";
import {Notification} from "./types";


const NOTIFICATIONS: Notification[] = [
    {
        id: faker.datatype.uuid(),
        title: 'Your order is placed',
        description: 'waiting for shipping',
        avatar: null,
        type: 'order_placed',
        createdAt: set(new Date(), {hours: 10, minutes: 30}),
        isUnRead: true,
    },
    {
        id: faker.datatype.uuid(),
        title: faker.name.fullName(),
        description: 'answered to your comment on the Minimal',
        avatar: '/assets/images/avatars/avatar_2.jpg',
        type: 'friend_interactive',
        createdAt: sub(new Date(), {hours: 3, minutes: 30}),
        isUnRead: true,
    },
    {
        id: faker.datatype.uuid(),
        title: 'You have new message',
        description: '5 unread messages',
        avatar: null,
        type: 'chat_message',
        createdAt: sub(new Date(), {days: 1, hours: 3, minutes: 30}),
        isUnRead: false,
    },
    {
        id: faker.datatype.uuid(),
        title: 'You have new mail',
        description: 'sent from Guido Padberg',
        avatar: null,
        type: 'mail',
        createdAt: sub(new Date(), {days: 2, hours: 3, minutes: 30}),
        isUnRead: false,
    },
    {
        id: faker.datatype.uuid(),
        title: 'Delivery processing',
        description: 'Your order is being shipped',
        avatar: null,
        type: 'order_shipped',
        createdAt: sub(new Date(), {days: 3, hours: 3, minutes: 30}),
        isUnRead: false,
    },
];

export default function NotificationPopover() {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
    const totalUnRead = NOTIFICATIONS.filter((notification) => notification.isUnRead).length
    return <>

        <IconButton color={anchorEl ? 'primary' : 'default'} sx={{width: 40, height: 40}}
                    onClick={(event) => setAnchorEl(event.currentTarget)}>
            <Badge color={'error'} badgeContent={totalUnRead}>
                <Iconify icon={'eva:bell-fill'}/>
            </Badge>
        </IconButton>
        <Menu
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
            anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            PaperProps={{
                sx: {
                    mt: 1.5,
                    ml: 0.75,
                    width: 360,
                },
            }}
            MenuListProps={{
                sx: {p: 0}
            }}
        >

            <ListItem sx={{display: 'flex', alignItems: 'center', py: 2, px: 2.5}}>

                 <ListItemText  sx={{m:0, flexGrow: 1}}
                 primary={<Typography variant="subtitle1">Notifications</Typography>}
                               secondary={<Typography variant="body2" sx={{color: 'text.secondary'}}>
                                   You have {totalUnRead} unread messages
                               </Typography>}
                 />

                {totalUnRead > 0 && (
                    <Tooltip title=" Mark all as read">
                        <IconButton color="primary">
                            <Iconify icon="eva:done-all-fill"/>
                        </IconButton>
                    </Tooltip>
                )}
            </ListItem>
            <ListItem disablePadding divider sx={{borderBottomStyle: 'dashed'}}/>
            <ListItem disablePadding>
                <Scrollbar sx={{height: {xs: 340, sm: 'auto'}}}>
                    <List
                        disablePadding
                        subheader={
                            <ListSubheader disableSticky sx={{py: 1, px: 2.5, typography: 'overline'}}>
                                New
                            </ListSubheader>
                        }
                    >
                        {NOTIFICATIONS.filter((notification) => notification.isUnRead).map((notification) => (
                            <NotificationItem key={notification.id} notification={notification}/>
                        ))}
                    </List>

                    <List
                        disablePadding
                        subheader={
                            <ListSubheader disableSticky sx={{py: 1, px: 2.5, typography: 'overline'}}>
                                Before that
                            </ListSubheader>
                        }
                    >
                        {NOTIFICATIONS.filter((notification) => !notification.isUnRead).map((notification) => (
                            <NotificationItem key={notification.id} notification={notification}/>
                        ))}
                    </List>
                </Scrollbar>
            </ListItem>
            <ListItem disablePadding divider sx={{borderBottomStyle: 'dashed'}}/>
            <ListItem>
                <Button fullWidth disableRipple>View All</Button>
            </ListItem>
        </Menu>
    </>
}

function NotificationItem({notification}: { notification: Notification }) {
    const {title, description, createdAt, isUnRead} = notification
    const avatar = getAvatar(notification)
    return <>
        <ListItem sx={{
            py: 1.5,
            px: 2.5,
            mt: '1px',
            ...(isUnRead && {backgroundColor: (theme) => theme.palette.action.selected})
        }}>
            <ListItemAvatar>
                <Avatar src={avatar} sx={{
                    backgroundColor: (theme) => theme.palette.background.neutral,
                    p: 1
                }}/>
            </ListItemAvatar>
            <ListItemText
                primary={<>
                    <Typography variant={"subtitle2"}>{title}
                        <Typography variant={'body2'} component={'span'} color={'text.secondary'}>
                            &nbsp;  {noCase(description)}
                        </Typography>
                    </Typography></>}
                secondary={<>
                    <Typography variant={'caption'} color={'text.disabled'}>
                        <Iconify icon={'eva:clock-outline'}
                                 sx={{mr: 0.5, width: 16, height: 16, verticalAlign: 'text-bottom',}}/>
                        {fToNow(createdAt)}
                    </Typography>
                </>}
            />
        </ListItem>
    </>
}

function getAvatar(notification: Notification): string {
    switch (notification.type) {
        case "friend_interactive":
            return notification.avatar
        case "chat_message":
            return "/assets/icons/ic_notification_chat.svg"
        case "mail":
            return "/assets/icons/ic_notification_mail.svg"
        case "order_placed":
            return "/assets/icons/ic_notification_package.svg"
        case "order_shipped":
            return "/assets/icons/ic_notification_shipping.svg"
    }
}