import {Variant} from "@mui/material/styles/createTypography";

interface BaseIconLinkList {
    icon: JSX.Element
}

interface PrimaryIconLinkList extends BaseIconLinkList {
    primaryText: string
    primaryVariant?: Variant
}

interface SecondaryIconLinkList extends BaseIconLinkList {
    secondaryText?: string
    link: string
    secondaryVariant?: Variant
}
export interface IconLinkListProps {
    items: (PrimaryIconLinkList | SecondaryIconLinkList | (PrimaryIconLinkList & SecondaryIconLinkList))[]
}
