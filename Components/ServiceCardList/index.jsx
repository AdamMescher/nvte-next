import React from 'react';
import PropTypes from 'prop-types';
import StyledServiceCardList from './styled';
import ServiceCard from '../ServiceCard';

const ServiceCardList = ({
  services
}) => (
  <StyledServiceCardList>
    {services.map(service => <ServiceCard alt={service.alt} text={service.text} src={service.src} key={service.alt} />)}
  </StyledServiceCardList>
);

ServiceCardList.propTypes = {
  services: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
  })).isRequired,
}


export default ServiceCardList;