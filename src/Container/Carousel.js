import {React, useState, useEffect, useRef}from 'react';

import CarouselItem from './CarouseItem';
import CarouselControls from './CarouselControls';

import 'pure-react-carousel/dist/react-carousel.es.css';
import './Carousel.css';

const Carousel = ({slides}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideInterval = useRef()

    const prev = () => {
        startSlideTimer()
        const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
        setCurrentSlide(index);
    }
    const next = () => {
        startSlideTimer()
        const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
        setCurrentSlide(index);
    }
   
    const startSlideTimer = () => {
        stopSlideTimer()
        slideInterval.current = setInterval(() => {
            setCurrentSlide(currentSlide => currentSlide === slides.length - 1 ? currentSlide + 1 : 0)
        }, 3000);
    }


    const stopSlideTimer = () => {
        if (slideInterval.current) {
            clearInterval(slideInterval.current);
        }
    }
    useEffect(() => {
        startSlideTimer();

        return () => stopSlideTimer();
    }, []);

    return (
        <div className='carousel'>
            <div 
                className='carousel-inner'
                style={{transform:`translateX(${-currentSlide * 100}%)`}}>
                    {slides.map((slide, index) =>
                        <CarouselItem slide={slide} key={index} stopSlide={stopSlideTimer} startSlide={startSlideTimer}/>
                )}
            </div>
            <CarouselControls prev={prev} next={next}/>
        </div>
    );
};

export default Carousel;
