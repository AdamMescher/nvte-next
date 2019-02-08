import React from 'react';
import StyledNav from './styled';
import NavList from '../NavList/index';
import hyperlinks from '../../lib/links';

const Nav = () => (
    <StyledNav>
        <NavList hyperlinks={hyperlinks} />
    </StyledNav>
)

export default Nav;