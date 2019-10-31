import React from 'react';
import Slider from 'react-slick';
import StyledSimpleSlider from './styled';
import generateTestimonialList from '../../lib/generateTestimonialList';
import testimonials from '../../lib/testimonials';

const settings = {
  arrows: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
const SimpleSlider = () => {
  return (
    <StyledSimpleSlider>
      {/* eslint-disable-next-line */}
      <Slider {...settings}>
        {generateTestimonialList(testimonials)}
      </Slider>
    </StyledSimpleSlider>
  );
}

export default SimpleSlider;