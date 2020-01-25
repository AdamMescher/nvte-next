import React from 'react';
import StyledServices from './styled';
import ServiceCardList from '../ServiceCardList';
import serviceCardContents from '../../lib/serviceCardContents';

const Services = () => (
  <StyledServices id="services">
    <h2>services</h2>
    <ServiceCardList services={serviceCardContents} />
  </StyledServices>
)

export default Services;
