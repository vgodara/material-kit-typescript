import {
    Card,
    CardContent,
    CardHeader,
    FormControl,
    FormControlLabel, Paper,
    Radio,
    RadioGroup,
    Typography
} from "@mui/material";
import React, {useState} from "react";
import {DeliveryOptionProps, DeliveryOptionsProps} from "./types";

export default function DeliveryOptions({
                                            deliveryOptions,
                                            defaultDeliveryOption,
                                            setSelectedDeliveryOption
                                        }: DeliveryOptionsProps) {
    const [deliveryOption, setDeliveryOption] = useState(defaultDeliveryOption)
    const handleDeliveryMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedDeliverOption = event.target.value as typeof defaultDeliveryOption | null
        if (selectedDeliverOption) {
            setDeliveryOption(selectedDeliverOption)
            setSelectedDeliveryOption(selectedDeliverOption)
        }

    }
    return <Card>
        <CardHeader title={'Deliver Options'}/>
        <CardContent component={FormControl}>
            <RadioGroup
                sx={(theme) => (
                    {
                        display: 'grid',
                        gap: theme.spacing(3),
                       gridTemplateColumns:'repeat(1, 1fr)',
                        [theme.breakpoints.up('md')]:{
                            gridTemplateColumns:'repeat(2, 1fr)',
                        }

                    }
                )}
                value={deliveryOption}
                onChange={handleDeliveryMethodChange}
            >
                {deliveryOptions.map((deliveryOption, index) => (
                    <DeliveryOption key={index} deliveryOption={deliveryOption}/>
                ))}
            </RadioGroup>
        </CardContent>
    </Card>
}

function DeliveryOption({deliveryOption: {type, title, description}}: DeliveryOptionProps) {
    return <Paper variant={'outlined'} sx={(theme)=>({

        boxShadow:theme.customShadows.dropdown
    })}>
        <FormControlLabel
            sx={(theme) => ({
                padding:theme.spacing(3,2.5),
            })}
            value={type}
            control={<Radio/>}
            label={<DeliveryInfo title={title} description={description}/>}/>
    </Paper>
}

function DeliveryInfo({title, description}: { title: string, description: string }) {
    return <>
        <Typography variant={'subtitle2'}>{title}</Typography>
        <Typography color={'text.secondary'} variant={'body2'}>{description}</Typography>
    </>
}