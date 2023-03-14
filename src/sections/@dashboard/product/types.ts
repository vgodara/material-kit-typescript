import {SxProps, Theme} from "@mui/material";

interface Product {
    id: string,
    cover: string,
    name: string,
    price: number,
    priceSale?: number,
    colors: string[],
    status?: string
}

export interface ShopProductProps {
    product: Product
}

export interface ProductListProps {
    sx?:SxProps<Theme>
    products: Product[]
}

export interface ShopFilterSidebarProps {
    openFilter: boolean

    setOpenFilter: (shouldOpen: boolean) => void
}