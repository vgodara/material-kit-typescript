import React, {useState} from "react";
import {CarouselProps} from "./types";
import Slider from "react-slick";
import {alpha, Box, IconButton, Typography} from "@mui/material";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Iconify from "../iconify";

export default function Carousel({list, slideToShow = 3}: CarouselProps) {
    const [slider1, setSlider1] = useState<Slider | null>(null);
    const [slider2, setSlider2] = useState<Slider | null>(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    return <Box>
        <Box sx={(theme) => ({
            borderRadius: theme.spacing(2),
            maxWidth:theme.spacing(69),
            position: 'relative',
            mb: 3,
            overflow: 'hidden',
        })}>
            <Slider
                lazyLoad={'ondemand'}
                asNavFor={slider2 ?? undefined}
                ref={setSlider1}
                afterChange={setCurrentIndex}
            >
                {list.map((imageUrl, index) =>
                    (<Box key={index} sx={{objectFit: 'cover'}} component={'img'} src={imageUrl}>

                        </Box>
                    ))}


            </Slider>
            <Box
                sx={(theme) => ({
                    position: 'absolute',
                    bottom: theme.spacing(2),
                    right: theme.spacing(2),
                    borderRadius: 1.4,
                    display: 'inline-flex',
                    color: theme.palette.common.white,
                    alignItems: 'center',
                    padding: 0.25,
                    backdropFilter: 'blur(6px)',
                    backgroundColor: alpha(theme.palette.grey["900"], 0.48),
                    zIndex: 9
                })}
            >
                <IconButton onClick={slider1?.slickPrev}>
                    <Iconify icon={'eva:arrow-ios-back-fill'}/>
                </IconButton>
                <Typography variant={'subtitle2'}>{`${currentIndex + 1}\\${list.length}`}</Typography>
                <IconButton onClick={slider1?.slickNext}>
                    <Iconify icon={'eva:arrow-ios-forward-fill'}/>
                </IconButton>
            </Box>
        </Box>
        <Box sx={(theme) => ({
            mx: 'auto',
            maxWidth: theme.spacing(29),
            position: 'relative',
            ':before,:after': {
                position: 'absolute',
                top: 0,
                content: '""',
                background: `linear-gradient(to left, ${alpha(theme.palette.common.white, 0)} 0%,  ${alpha(theme.palette.common.white, 1)} 100%)`,
                width: theme.spacing(5.3),
                height: 1,
                zIndex: 9,
            },
            ':after': {
                right: 0,
                transform: 'scaleX(-1)',
            }
        })}>
            <Slider
                lazyLoad={'ondemand'}
                asNavFor={slider1 ?? undefined}
                ref={setSlider2}
                slidesToShow={slideToShow}
                swipeToSlide
                useCSS
                focusOnSelect
            >
                {list.map((imageUrl, index) =>
                    (<Box sx={() => ({
                            px: 0.75,
                            borderRadius:2.5 ,
                            overflow:'hidden',
                            objectFit:'cover'
                        })} key={index}  component={'img'} src={imageUrl}/>
                    ))}
            </Slider>
        </Box>
    </Box>

}