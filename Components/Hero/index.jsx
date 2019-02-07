import React from 'react';
import StyledHero from './styled';
import Link from 'next/link';
import FullPageBackgroundImage from '../FullPageBackgroundImage/index';
import Nav from '../Nav/index';
import Logo from '../Logo/index';

const Hero = () => (
    <StyledHero>
        <FullPageBackgroundImage src={`https://source.unsplash.com/random/2560×1440`} alt={`Unsplash filler image`} />
        <Nav />
        <Link href="/">
            <a>
                <Logo />
            </a>
        </Link>
    </StyledHero>
)

export default Hero;