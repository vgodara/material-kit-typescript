import {Button, Card, CardContent, CardHeader, Stack, Typography} from "@mui/material";
import Iconify from "../../components/iconify";
import React from "react";
import {BillingAddressProps} from "./types";

export default function BillingAddress({address: {name, type, address, pinCode}, action}: BillingAddressProps) {
    return <Card sx={{mb: 3}}>
        <CardHeader
            title={'Billing Address'}
            action={action && (<Button
                startIcon={(<Iconify icon={'eva:edit-fill'}/>)}
                onClick={action}
            >
                Edit
            </Button>)}/>
        <CardContent component={Stack} spacing={1}>
            <Typography variant={'subtitle2'}>
                {
                    name
                }
                {type && (<Typography color={'text.secondary'} variant={'body2'}
                                      component={'span'}>{`\u00A0(${type})`}</Typography>)}
            </Typography>
            <Typography variant={'body2'}>{address}</Typography>
            <Typography color={'text.secondary'} variant={'body2'}>{pinCode}</Typography>
        </CardContent>
    </Card>
}