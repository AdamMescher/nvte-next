import React from 'react';
import PropTypes from 'prop-types';
import StyledServiceCardList from './styled';
import ServiceCard from '../ServiceCard';

const ServiceCardList = ({
  services
}) => (
  <StyledServiceCardList>
    <ul>
      {services.map(service => <ServiceCard text={service.text} />)}
    </ul>
  </StyledServiceCardList>
)

ServiceCardList.propTypes = {
  services: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
  })).isRequired,
}


export default ServiceCardList;