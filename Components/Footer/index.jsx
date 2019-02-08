import React from 'react';
import StyledFooter from './styled';
import NavList from '../NavList/index';
import SocialList from '../SocialList/index';
import hyperlinks from '../../lib/hyperlinks';
import socialHyperlinks from '../../lib/socialHyperlinks';

const Footer = () => (
    <StyledFooter>
        <nav>
            <NavList hyperlinks={hyperlinks} />
        </nav>
        <SocialList socialHyperlinks={socialHyperlinks} />
    </StyledFooter>
);

export default Footer;