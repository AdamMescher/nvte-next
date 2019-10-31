import React from 'react';
import PropTypes from 'prop-types';
import generateNavListHyperlinks from '../../lib/generateNavListHyperlinks';


const NavList = ({ hyperlinks }) => <ul>{generateNavListHyperlinks(hyperlinks)}</ul>

NavList.propTypes = {
  hyperlinks: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default NavList;
