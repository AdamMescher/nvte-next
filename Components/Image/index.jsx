import React from 'react';
import PropTypes from 'prop-types';
import StyledImage from './styled';

const Image = ({
  children,
  onClick
}) => <StyledImage onClick={onClick}>{children}</StyledImage>

Image.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Image;