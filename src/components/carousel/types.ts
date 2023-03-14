import Slider from "react-slick";

export {}

export interface CarouselProps {
    list: string[]
}

export interface CarouselState {
    nav1?: Slider
    nav2?: Slider
}