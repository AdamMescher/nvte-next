import React from 'react';
import PropTypes from 'prop-types';
import StyledGalley from './styled';

const Gallery = ({
    children
}) => <StyledGalley>{children}</StyledGalley>

Gallery.propTypes = {
    children: PropTypes.arrayOf
}

Gallery.defaultProps = {
    children: []
}

export default Gallery;