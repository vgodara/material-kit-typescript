
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