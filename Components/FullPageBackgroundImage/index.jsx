import React from 'react';
import PropTypes from 'prop-types';
import StyledFullPageBackgroundImage from './styled';

const FullPageBackgroundImage = ({
    src,
    alt
}) => <StyledFullPageBackgroundImage src={src} alt={alt} />

FullPageBackgroundImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
}

FullPageBackgroundImage.defaultProps = {
  src: '',
  alt: ''
}

export default FullPageBackgroundImage;