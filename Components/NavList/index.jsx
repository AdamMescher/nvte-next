import React from 'react';
import generateNavListHyperlinks from '../../lib/generateNavListHyperlinks';


const NavList = ({ hyperlinks }) => (
  <ul>
    {generateNavListHyperlinks(hyperlinks)}
  </ul>
);

export default NavList;
