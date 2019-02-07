import React from 'react';
import Link from 'next/link';
import StyledNav from './styled';

const Nav = () => (
    <StyledNav>
        <ul>
            <li>
                <Link href="#about">
                    <a>About</a>
                </Link>
            </li>
            <li>
                <Link href="#gallery">
                    <a >Gallery</a>
                </Link>
            </li>
            <li>
                <Link href="#contact">
                    <a>Contact</a>
                </Link>
            </li>
        </ul>
    </StyledNav>
);

export default Nav;