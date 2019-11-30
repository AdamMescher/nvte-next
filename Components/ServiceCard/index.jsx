import React from 'react';
import PropTypes from 'prop-types';
import StyledServiceCard from './styled';

const ServiceCard = ({
  text,
}) => (
  <StyledServiceCard>
    <h3>{text}</h3>
  </StyledServiceCard>

);

ServiceCard.propTypes = {
  text: PropTypes.string.isRequired,
}

export default ServiceCard;
