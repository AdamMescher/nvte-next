import React, { Component } from 'react';
import Slider from 'react-slick';
import StyledSimpleSlider from './styled';
import generateTestimonialList from '../../lib/generateTestimonialList';
import testimonials from '../../lib/testimonials';

class SimpleSlider extends Component {
    render() {
        const settings = {
            arrows: true,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <StyledSimpleSlider>
                <Slider {...settings}>
                    {generateTestimonialList(testimonials)}
                </Slider>
            </StyledSimpleSlider>
        );
    }
}

export default SimpleSlider;