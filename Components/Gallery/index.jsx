import React from 'react';
import StyledGallery from './styled';
import images from '../../lib/indexGalleryImages';

const generateImageGallery = (images) => images.map(img => <img src={img.src} alt={img.alt} key={img.title} />);

const Gallery = () => (
    <StyledGallery>
        <h2>gallery</h2>
        <div>
            {generateImageGallery(images)}
        </div>
    </StyledGallery>
)

export default Gallery;