import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    FormControl,
    FormControlLabel,
    MenuItem,
    Paper,
    Radio,
    RadioGroup,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import Iconify from "../../components/iconify";
import React, {useState} from "react";
import {PaymentOptionProps, PaymentOptionsProps} from "./types";


export default function PaymentOptions({
                                           paymentOptions,
                                           defaultPaymentOption,
                                           setSelectedPaymentOption
                                       }: PaymentOptionsProps) {
    const [paymentMethod, setPaymentMethod] = useState(defaultPaymentOption)
    const handlePaymentMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedPaymentMethod = event.target.value as typeof defaultPaymentOption | null
        if (selectedPaymentMethod) {
            setPaymentMethod(selectedPaymentMethod)
            setSelectedPaymentOption(selectedPaymentMethod)
        }

    }
    return < >
        <Card sx={{my:3}}>
            <CardHeader title={'Payment Options'}/>
            <CardContent component={FormControl}>
                <RadioGroup
                    value={paymentMethod}
                    onChange={handlePaymentMethodChange}
                    sx={(theme) => (
                        {
                            display: 'flex',
                            rowGap: theme.spacing(3)
                        }
                    )}>
                    {paymentOptions.map((paymentOption, index) =>
                        (<PaymentOption key={index} paymentOption={paymentOption}/>))
                    }
                </RadioGroup>
            </CardContent>

        </Card>
    </>
}

function PaymentOption({paymentOption}: PaymentOptionProps) {
    const {title, description, icons, type} = paymentOption

    return <Paper  variant={'outlined'}>
        <Stack direction={'row'} justifyContent={'space-between'}>
            <FormControlLabel sx={(theme) => ({
                padding: theme.spacing(3, 0, 3, 2.5),
                marginRight: 0,
                flexGrow: 1,
            })} value={type} control={<Radio/>}
                              label={<PaymentProviderInfo title={title} description={description}/>}/>
            <Stack flexShrink={0} direction={'row'} spacing={1} paddingRight={2.5}>
                {icons.map((icon, index) => (
                    <Box key={index} component={'img'} src={icon}/>))}
            </Stack>

        </Stack>
        {(type === 'credit' || type === 'debit') &&
            (
                <SelectedCard cards={paymentOption.savedCards} setSelectedCard={paymentOption.setSelectedCard}/>

            )}
    </Paper>
}

function PaymentProviderInfo({title, description}: { title: string, description: string }) {
    return <>
        <Typography variant={'subtitle2'}>{title}</Typography>
        <Typography color={'text.secondary'} variant={'body2'}>{description}</Typography>
    </>
}
function SelectedCard({cards, setSelectedCard}: {
    cards: { value: number, label: string }[],
    setSelectedCard: (value: number) => void
}) {
    const handleCardSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedCard = parseInt(event.target.value, 10)
        setSelectedCard(selectedCard)
    }
    return <Stack justifyContent={'center'} alignItems={'flex-start'} px={3}>
        <TextField
            id="outlined-select-currency"
            select
            label={'Card'}
            defaultValue={0}
            onChange={handleCardSelection}
            fullWidth
        >
            {cards.map((card) => (
                <MenuItem key={card.value} value={card.value}>
                    {card.label}
                </MenuItem>
            ))}
        </TextField>
        <Button size={'small'} sx={{my: 3}} startIcon={(<Iconify icon={'eva:plus-fill'}></Iconify>)}>Add new
            Card</Button>
    </Stack>
}

