import {SxProps, Theme} from "@mui/material";

interface ProductList {
    id: string,
    cover: string,
    name: string,
    price: number,
    priceSale?: number,
    colors: string[],
    status?: string
}

interface ProductDetail extends ProductList {
    sellableUnit:number,
    rating:number,
    totalReviews:number
}

export interface ProductBuyBoxProps {
    product:ProductDetail
}

export interface ShopProductProps {
    product: ProductList
}

export interface ProductListProps {
    sx?:SxProps<Theme>
    products: ProductList[]
}

export interface ShopFilterSidebarProps {
    openFilter: boolean

    setOpenFilter: (shouldOpen: boolean) => void
}