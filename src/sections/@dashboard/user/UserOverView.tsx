import {Card, CardContent, CardHeader, Typography} from "@mui/material";
import {UserOverViewProps} from "./types";
import Iconify from "../../../components/iconify";
import React from "react";
import {Variant} from "@mui/material/styles/createTypography";
import IconLinkList from "../../../components/lists/IconLinkList";

export default function UserOverView({
                                         overView: {
                                             aboutMe,
                                             residence,
                                             email,
                                             workRole,
                                             workPlace,
                                             studyPlace
                                         }
                                     }: UserOverViewProps) {
    const items = [{
        icon: <Iconify color={'inherit'} icon={'eva:pin-fill'}/>,
        primaryText: 'Live at',
        primaryVariant : 'body2' as Variant,
        secondaryText: residence,
        link: '#',
        secondaryVariant : 'subtitle2' as Variant,
    },
        {
            icon:  <Iconify icon={'eva:email-fill'}/>,
            secondaryText: email,
            link: '#',
            secondaryVariant : 'body2' as Variant,

},
    {
        icon:   <Iconify icon={'ic:round-business-center'}/>,
        primaryText: workRole + ' at',
        primaryVariant:'body2' as Variant,
        secondaryText: workPlace,
        link: '#',
        secondaryVariant : 'subtitle2' as Variant,

    }
,
    {
        icon:   <Iconify icon={'ic:round-business-center'}/>,
        primaryText: 'Studied at',
        primaryVariant : 'body2' as Variant,
        secondaryText: studyPlace,
        link: '#',
        secondaryVariant : 'subtitle2' as Variant,

    }
,]
    return <Card>
        <CardHeader title={'About'}/>
        <CardContent>
            <Typography variant={'body2'}>{aboutMe}</Typography>
            <IconLinkList items={items}/>
        </CardContent>
    </Card>
}