import React from 'react';
import Link from 'next/link';
import StyledHero from './styled';
import FullPageBackgroundImage from '../FullPageBackgroundImage/index';
import Nav from '../Nav/index';
import Logo from '../Logo/index';

const Hero = () => (
  <StyledHero>
    <FullPageBackgroundImage
      src="../../static/assets/images/large-image/5 - Reyka.jpg"
      alt="Promotional shot of Reyka Vodka taken at a place that I'm not sure of"
    />
    <Nav />
    <Link href="/">
      <a>
        <Logo />
      </a>
    </Link>
  </StyledHero>
);

export default Hero;
