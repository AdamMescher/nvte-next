import React from 'react';
import StyledGallery from './styled';
import LightboxGallery from '../LightboxGallery';

const Gallery = () => (
  <StyledGallery id="gallery">
    <h2>gallery</h2>
    <div>
      <LightboxGallery />
    </div>
  </StyledGallery>
);

export default Gallery;
