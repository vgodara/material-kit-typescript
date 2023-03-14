import React, {Component} from "react";
import {CarouselProps, CarouselState} from "./types";
import Slider from "react-slick";
import {Box} from "@mui/material";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Carousel extends Component<CarouselProps, CarouselState> {
    private _slider1: Slider | null|undefined = null
    private _slider2: Slider | null|undefined = null


    private getSlider1() {
        if (this._slider1)
            return this._slider1
    }
    private getSlider2() {
        if (this._slider2)
            return this._slider2
    }

    constructor(props: CarouselProps) {
        super(props)
        this.state = {};
        this._slider1=null
        this._slider2=null

    }

    componentDidMount() {
        this.setState({
            nav1: this.getSlider1(),
            nav2: this.getSlider2()
        });
    }



    render() {
        return <>
            <Slider
                key={1}
                asNavFor={this.state.nav2}
                ref={(slider)=>{this._slider1=slider}}
            >
                {this.props.list.map((imageUrl, index) =>
                    (<Box key={index} component={'img'} src={imageUrl}/>
                    ))}
            </Slider>

            <Slider
                key={2}
                asNavFor={this.state.nav1}
                ref={(slider)=>{this._slider2=slider}}
                slidesToShow={this.props.list.length}
                swipeToSlide={true}
                focusOnSelect={true}
            >
                {this.props.list.map((imageUrl, index) =>
                    (<Box key={index} component={'img'} src={imageUrl}/>
                    ))}
            </Slider>
        </>;
    }
}