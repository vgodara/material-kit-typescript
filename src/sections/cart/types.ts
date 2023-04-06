
interface Address {
    id: string,
    isDefault:boolean
    name: string,
    type?: string,
    address: string,
    pinCode: string

}


export interface AddressProps {
    address: Address
    onAddressSelection: (id: string) => void
}

export interface BillingAddressProps {
    address: Address
    action?: () => void
}


