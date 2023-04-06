import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    InputAdornment,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {fCurrency} from "../../utils/formatNumber";
import {OrderSummaryProps} from "./types";
import React, {useState} from "react";
import Iconify from "../../components/iconify";

export default function OrderSummary({ currentStep,
                                         setCurrentStep,
                                         order: {

                                             subTotal,
                                             discount,
                                             shippingCharge,
                                             total,
                                         },
                                         onApplyCoupon
                                     }: OrderSummaryProps) {
    const formattedShippingCharge = typeof shippingCharge === 'string' ? shippingCharge : fCurrency(shippingCharge)
    const data = [
        {title: 'Sub Total', value: fCurrency(subTotal)},
        {title: 'Discount', value: fCurrency(-discount)},
        {title: 'Shipping', value: formattedShippingCharge},
    ]
    return <><Card>
        <CardHeader title={`Order Summary`}
                    action={currentStep === 2 && (<Button
                        onClick={() => setCurrentStep(0)}
                        startIcon={(<Iconify icon={'eva:edit-fill'}/>)}>
                        Edit</Button>)}/>
        <CardContent component={Stack} spacing={2}>
            {data.map(({title, value}, index) => (
                <Stack key={index} direction={'row'} justifyContent={'space-between'}>
                    <Typography variant={'body2'} color={'text.secondary'}>{title}</Typography>
                    <Typography variant={'subtitle2'}>{value}</Typography>
                </Stack>))}
            <Divider variant={'fullWidth'}/>
            <Stack direction={'row'} justifyContent={'space-between'}>
                <Typography variant={'subtitle1'}>{'Total'}</Typography>
                <Box textAlign={'right'}>
                    <Typography variant={'body1'}
                                color={'warning.darker'}>{fCurrency(total)}</Typography>
                    <Typography variant={'caption'} component={'i'}>{`(VAT included if applicable)`}</Typography>
                </Box>
            </Stack>
            <Coupon onApplyCoupon={onApplyCoupon}/>
        </CardContent>

    </Card>

        <CheckoutButton currentStep={currentStep} setCurrentStep={setCurrentStep}/>
    </>
}

function Coupon({onApplyCoupon}: { onApplyCoupon: (coupon: string) => boolean }) {
    const [coupon, setCoupon] = useState('')
    const [error, setError] = useState(false)
    const handleApplyCoupon = () => setError(!onApplyCoupon(coupon))
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input = event.currentTarget.value.toUpperCase()
        setError(false)
        setCoupon(input)
    }
    return <TextField
        value={coupon}
        error={error}
        onChange={handleInputChange}
        helperText={error && 'Invalid Coupon'}
        InputProps={{
            endAdornment:
                (<InputAdornment position={'end'}>
                    <Button
                        sx={(theme) => ({
                            mr: theme.spacing(-0.5),
                        })}
                        size={'medium'}
                        disableElevation
                        onClick={handleApplyCoupon}>{`Apply`}</Button>
                </InputAdornment>)
        }}
    />
}

function CheckoutButton({currentStep, setCurrentStep}: {
    currentStep: number,
    setCurrentStep: (step: number) => void
}) {
    return <> {currentStep !== 1 && (<Button
        variant={'contained'}
        size={'large'}
        fullWidth
        onClick={() => {
            if (currentStep === 0) {
                setCurrentStep(1)
            }
        }}
        sx={(theme) => ({
            marginTop: theme.spacing(3),
        })}
    >{currentStep === 2 ? 'Complete Order' : 'Checkout'}</Button>)}
    </>
}