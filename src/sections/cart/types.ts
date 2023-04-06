
interface Address {
    id: string,
    isDefault:boolean
    name: string,
    type?: string,
    address: string,
    pinCode: string

}
interface DeliveryOption {
    type: 'standard' | 'express'
    title: string,
    description: string
}



export interface AddressProps {
    address: Address
    onAddressSelection: (id: string) => void
}
interface OrderSummery {

    subTotal: number,
    discount: number,
    shippingCharge: number | string
    total: number
}
interface PaymentInfoBase<T extends string> {
    title: string;
    description: string;
    icons: string[];
    type: T;
}

interface CreditCardInfo extends PaymentInfoBase<'credit' | 'debit'> {
    savedCards: {
        value: number;
        label: string;
    }[];
    setSelectedCard: (value: number) => void
}

interface ThirdPartyPaymentOption extends PaymentInfoBase<'paypal' | 'cod'> {
}

export interface PaymentOptionProps {
    paymentOption: CreditCardInfo | ThirdPartyPaymentOption;

}

export interface PaymentOptionsProps {
    paymentOptions: (CreditCardInfo | ThirdPartyPaymentOption) []
    defaultPaymentOption: 'credit' | 'debit' | 'paypal' | 'cod'
    setSelectedPaymentOption: (type: 'credit' | 'debit' | 'paypal' | 'cod') => void
}
export interface BillingAddressProps {
    address: Address
    action?: () => void
}

export interface DeliveryOptionProps {
    deliveryOption: DeliveryOption
}

export interface DeliveryOptionsProps {
    deliveryOptions: DeliveryOption[]
    defaultDeliveryOption: DeliveryOption['type']
    setSelectedDeliveryOption: (type: DeliveryOption['type']) => void,
}

export interface OrderSummaryProps {
    currentStep:number,
    setCurrentStep:(step:number)=>void
    order:OrderSummery
    onApplyCoupon:(coupon:string)=>boolean
}