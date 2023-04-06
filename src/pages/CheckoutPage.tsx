import {Box, Container, Step, StepLabel, Stepper, Typography} from "@mui/material";
import Breadcrumbs from "../sections/navigation/Breadcrumbs";
import Grid2 from "@mui/material/Unstable_Grid2";
import {useState} from "react";
import {
    AddressSection,
    BillingAddressSection,
    DeliveryOptionSection,
    ItemsToBuySection,
    OrderSummarySection,
    PaymentOptionsSection
} from "../sections/cart";
import {addresses, deliveryOptions, itemsToBuy, order, paymentOptions} from "../temp/data";
import {faker} from "@faker-js/faker";

import {sample} from "lodash";

export default function CheckoutPage() {
    const steps = [
        'Cart',
        'Billing & address',
        'Payment',
    ];
    const [currentStep, setCurrentStep] = useState(0)



    function handleAddressSelection(id: string) {
        console.log(id)
        setCurrentStep(2)
    }

    function handleApplyCoupon(coupon: string) {
        console.log(coupon)
        return faker.datatype.boolean()
    }

    function handlePaymentMethodSelection(type: string) {
        console.log(type)
    }

    function handleDeliverOptionSelection(type: string) {
        console.log(type)
    }

    function handleChangeInQuantity(productId:string,selectedQuantity:number) {
        console.log(`${productId} ~ ${selectedQuantity}`)
    }

    return <Container maxWidth={"lg"}>
        <Box marginBottom={5}>
            <Typography variant={'h4'} gutterBottom>Checkout</Typography>
            <Breadcrumbs list={[{label: 'Dashboard', link: '/dashboard'}, {
                label: 'Products',
                link: '/dashboard/products'
            }, {label: 'Checkout', link: '/dashboard/checkout'}]}/>
        </Box>
        <Grid2 container>
            <Grid2 xs={12} md={8}>
                <Stepper sx={{marginBottom: 3}} activeStep={currentStep} alternativeLabel>
                    {steps.map((value, index) => (
                        <Step key={index}>
                            <StepLabel>{value}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Grid2>
        </Grid2>
        <Grid2 container spacing={{xs: 3}}>
            <Grid2 xs={12} md={8}>
                {currentStep === 0 && (<ItemsToBuySection
                    onQuantityChange={handleChangeInQuantity}
                    products={itemsToBuy}/>)}
                {currentStep === 1 && (addresses.map((address, index) => (
                    <AddressSection
                        key={index}
                        address={address}
                        onAddressSelection={handleAddressSelection}/>
                )))}
                {currentStep === 2 && (<>
                    <DeliveryOptionSection
                        deliveryOptions={deliveryOptions}
                        defaultDeliveryOption={'standard'}
                        setSelectedDeliveryOption={handleDeliverOptionSelection}/>
                    <PaymentOptionsSection
                        paymentOptions={paymentOptions}
                        defaultPaymentOption={'debit'}
                        setSelectedPaymentOption={handlePaymentMethodSelection}/></>)}
            </Grid2>
            <Grid2 xs={12} md={4}>
                {currentStep === 2 && (<BillingAddressSection
                    address={sample(addresses)!}
                    action={() => setCurrentStep(1)}
                />)}
                <OrderSummarySection
                    order={order}
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                    onApplyCoupon={handleApplyCoupon}
                />
            </Grid2>
        </Grid2>
    </Container>
}

