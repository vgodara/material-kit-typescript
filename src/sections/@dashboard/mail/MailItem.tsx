import {Avatar, Box, Checkbox, Stack, Typography} from "@mui/material";
import Iconify from "../../../components/iconify";
import Label from "../../../components/label";
import React from "react";
import {fDate} from "../../../utils/formatTime";

type Mail = {
    name: string,
    avatar?: string,
    subject: string,
    content: string,
    selected: boolean,
    starred: boolean,
    important: boolean,
    read: boolean,
    labels: LabelType[],
    date: Date
}

interface MailItemProps {
    isDesktop:boolean,
    mail: Mail
}

export default function MailItem({isDesktop,mail}: MailItemProps) {

    const {name, avatar, subject, content, selected, starred, important, read, labels, date} = mail
    return <Stack direction={'row'} spacing={2} alignItems={'center'} sx={{
        p: 2,
        backgroundColor: (theme) => read ? theme.palette.common.white : theme.palette.background.neutral,
        '& > *': {
            flexShrink: 0
        },
    }}>
        {isDesktop &&  <MailItemButton
            selected={selected}
            starred={starred}
            important={important}
        />}


        <Avatar sx={{width: 32, height: 32}} src={avatar}
        >{!avatar && name.at(0)}</Avatar>
        {isDesktop?
            <MailItemContent
                name={name/*'Jayvion Simon'*/}
                subject={subject/*'Apply These 7 Secret Techniques To Improve Event'*/}
                content={content/*'Assumenda nam repudiandae rerum fugiat vel maxime.'*/}
                read={read}
            />
            :<Box>
                <Typography variant={'body2'} sx={{
                    width: {md: 160},
                    flexShrink: 0,
                    mr: 2,
                    ...(read && {
                        color: (theme) => theme.palette.text.primary,
                        fontWeight: (theme) => theme.typography.fontWeightBold
                    })
                }}
                            noWrap>{name}</Typography>

                <Typography
                    noWrap
                    variant={'body2'} sx={{
                    ...(read && {
                        color: (theme) => theme.palette.text.primary,
                        fontWeight: (theme) => theme.typography.fontWeightBold
                    })
                }}>
                    {subject} -
                    <Typography component={'span'} textOverflow={'ellipsis'} noWrap>{content}</Typography>
                </Typography>

                <Typography  noWrap variant={'caption'}>{fDate(date)}</Typography>
            </Box>

        }

        {isDesktop &&  <MailItemLabel list={labels}/>}

        {isDesktop &&  <Typography  noWrap variant={'caption'}>{fDate(date)}</Typography>}
    </Stack>
}

function MailItemButton({selected, starred, important}: { selected: boolean, starred: boolean, important: boolean }) {
    return <Box sx={{display: {xs: 'none', md: 'flex'}}}>
        <Checkbox checked={selected}></Checkbox>
        <Checkbox checked={starred} icon={<Iconify width={24} icon={'eva:star-outline'}/>}
                  checkedIcon={<Iconify width={24} color={'#ffab00'}
                                        icon={'eva:star-fill'}/>}></Checkbox>
        <Checkbox checked={important} icon={<Iconify width={24} icon={'ic:round-label-important'}/>}
                  checkedIcon={<Iconify width={24} color={'#ffab00'}
                                        icon={'ic:round-label-important'}/>}></Checkbox>
    </Box>
}

function MailItemContent({
                             name,
                             subject,
                             content,
                             read
                         }: { name: string, subject: string, content: string, read: boolean }) {
    return <>
        <Typography variant={'body2'} sx={{
            width: {md: 160},
            flexShrink: 0,
            mr: 2,
            ...(read && {
                color: (theme) => theme.palette.text.primary,
                fontWeight: (theme) => theme.typography.fontWeightBold
            })
        }}
                    noWrap>{name}</Typography>
        <Box sx={{flexGrow: 1}}/>

        <Typography
            noWrap
            variant={'body2'} sx={{
            minWidth: 0,
            ...(read && {
                color: (theme) => theme.palette.text.primary,
                fontWeight: (theme) => theme.typography.fontWeightBold
            })
        }}>
            {subject} -
        </Typography>
        <Typography sx={{
            flexShrink: '1 !important',
            ml: '0 !important',
            minWidth: 0,
            textOverflow: 'ellipsis',

        }} noWrap>{content}</Typography>

    </>
}

export type LabelType = 'social' | 'promotions' | 'forums'

interface MailItemLabelProps {
    list: LabelType[]
}

function MailItemLabel({list}: MailItemLabelProps) {

    return <Box sx={{gap: 1, display: {xs: 'none', md: 'flex'}}}>
        {Array.from(new Set(list)).map((value, index) => {
            switch (value) {
                case 'social':
                    return <Label key={index} color={'success'} variant={'filled'}>{value}</Label>
                case "forums":
                    return <Label key={index} color={'error'} variant={'filled'}>{value}</Label>
                case "promotions":
                    return <Label key={index} color={'warning'} variant={'filled'}>{value}</Label>
                default :
                    return <></>
            }
        })}
    </Box>
}