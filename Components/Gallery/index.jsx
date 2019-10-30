import React from 'react';
import PropTypes from 'prop-types';
import StyledGalley from './styled';

const Gallery = ({children}) => <StyledGalley children={children}/>

Gallery.PropTypes = {
    children: PropTypes.array
}

export default Gallery;