import React from 'react';
import PropTypes from 'prop-types';
import StyledTestimonialCard from './styled';

const TestimonialCard = ({ testimonial }) => (
  <StyledTestimonialCard>
    <img className="photo" src={testimonial.imgUrl} alt={testimonial.imgAlt} />
    <div className="container">
      <img className="quotes" src="/icons/quotation-mark.svg" alt="large quotation marks" />
      <div className="body-and-name-container">
        <p className="body">{testimonial.text}</p>
        <p className="name">{`- ${testimonial.name}`}</p>
      </div>
    </div>
  </StyledTestimonialCard>
);

TestimonialCard.propTypes = {
  testimonial: PropTypes.objectOf(PropTypes.number).isRequired
}

export default TestimonialCard;