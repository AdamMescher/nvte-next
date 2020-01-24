import React from 'react';
import PropTypes from 'prop-types';
import StyledServiceCard from './styled';

const ServiceCard = ({
  alt,
  text,
  src
}) => (
  <StyledServiceCard>
    <img src={`/icons/${src}.svg`} alt={alt} />
    <h3>{text}</h3>
  </StyledServiceCard>

);

ServiceCard.propTypes = {
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
}

export default ServiceCard;
