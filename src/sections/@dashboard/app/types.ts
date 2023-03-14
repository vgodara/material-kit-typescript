import {SxProps, Theme} from "@mui/material";

export interface AppTasksProps {
    title: string,
    subHeader?: string
    list: { id: string, label: string }[]
}

export interface AppWidgetSummaryProps {
    color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'
    icon?: string
    title: string
    total: number
    sx?: SxProps<Theme>
}

type OrderItem = {
    id: string
    time: Date
    title: string
    type?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'
}

export interface OrderItemProps {
    item: OrderItem
    isLast: boolean
}

export interface AppOrderTimeLineProps {
    title: string
    subheader?: string
    list: OrderItem[]
}

type News = {
    description: string,
    image: string,
    postedAt: Date,
    title: string,
}

export interface NewsItemProps {
    news: News
}

export interface AppNewsUpdateProps {
    title: string
    subHeader?: string
    list: News[]
}

type SiteVisit = {
    name: string
    value: number
    icon: JSX.Element
}

export interface AppTrafficBySiteProps {
    title: string,
    subheader?: string
    list: SiteVisit[]
}

export interface SiteVisitProps {
    details: SiteVisit
}

type AppWebsiteVisitData = {
    name: string
    type: string
    fill: string
    data: number[]
}

export interface AppWebsiteVisitsProps {
    title: string,
    subheader?: string
    chartLabels: string[]
    chartData: AppWebsiteVisitData[]
}

type AppConversionRatesData = {
    label: string,
    value: number
}

export interface AppConversionRatesProps {
    title: string,
    subheader?: string
    chartData: AppConversionRatesData[]
}

type AppCurrentSubjectData = {
    name: string,
    data: number[]

}

export interface AppCurrentSubjectProps {
    title: string
    subheader?: string
    chartLabels: string[]
    chartColors: string[]
    chartData: AppCurrentSubjectData[]
}

type CurrentVisitData = {
    label: string
    value: number
}

export interface AppCurrentVisitProps {
    title:string
    subheader?:string
    chartData:CurrentVisitData[]
    chartColors:string[]
}