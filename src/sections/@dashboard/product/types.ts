import {SxProps, Theme} from "@mui/material";
import {User} from "../user/types";

interface ProductList {
    id: string,
    cover: string,
    name: string,
    price: number,
    priceSale?: number,
    colors: string[],
    status?: string
}

interface Rating {
    user: User,
    verifiedPurchase: boolean,
    verifiedPurchaseText:string
    stars: number,
    review: string,
    reviewTime:Date,

    helpfulText:string,

    foundHelpful:number

}
export interface RatingProps{
    rating:Rating
}
interface ProductDetail extends ProductList {
    sellableUnit: number,
    averageRating:number
    aggregatedRatings: { label: string, value: number,occurrence:number }[]
    ratings: Rating[],

    descriptions: {
        heading: string
        detail: string
    }[]
}

export interface ProductBuyBoxProps {
    product: ProductDetail
}

export interface ShopProductProps {
    product: ProductList
}

export interface ProductListProps {
    sx?: SxProps<Theme>
    products: ProductList[]
}

export interface ShopFilterSidebarProps {
    openFilter: boolean

    setOpenFilter: (shouldOpen: boolean) => void
}