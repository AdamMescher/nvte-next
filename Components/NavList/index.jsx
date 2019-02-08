import React from 'react';
import generateNavListItems from '../../lib/generateNavListItems';


const NavList = ({ hyperlinks }) => (
    <ul>
        {generateNavListItems(hyperlinks)}
    </ul>
);

export default NavList;
