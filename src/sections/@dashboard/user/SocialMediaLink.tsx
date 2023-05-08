import {Card, CardContent, CardHeader} from "@mui/material";
import {SocialMediaLinkProps} from "./types";
import React from "react";
import Iconify from "../../../components/iconify";
import {Variant} from "@mui/material/styles/createTypography";
import IconLinkList from "../../../components/lists/IconLinkList";

export default function SocialMediaLink({links: {facebook, instagram, linkedin, twitter}}: SocialMediaLinkProps) {
    const items = [
        {
            icon: <Iconify icon={'eva:facebook-fill'} color={'#1877F2'}/>,
            link: facebook,
            secondaryVariant: 'body2' as Variant,

        },
        {
            icon: <Iconify icon={'ant-design:instagram-filled'} color={'#e02d69'}/>,
            link: instagram,
            secondaryVariant: 'body2' as Variant,
        },
        {
            icon: <Iconify icon={'eva:linkedin-fill'} color={'#006097'}/>,
            link: linkedin,
            secondaryVariant: 'body2' as Variant,
        },
        {
            icon: <Iconify icon={'eva:twitter-fill'} color={'#1C9CEA'}/>,
            link: twitter,
            secondaryVariant: 'body2' as Variant,
        }]
    return (<Card>
        <CardHeader title={'Social'}/>
        <CardContent>
            <IconLinkList items={items}/>
        </CardContent>
    </Card>)
}