import React from 'react';
import Link from 'next/link';
import StyledHero from './styled';
import FullPageBackgroundImage from '../FullPageBackgroundImage/index';
import Nav from '../Nav/index';
import Logo from '../Logo/index';

const Hero = () => (
  <StyledHero>
    <FullPageBackgroundImage
      src="images/reykaTwo.jpg"
      alt="Promotional shot of Reyka Vodka"
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
