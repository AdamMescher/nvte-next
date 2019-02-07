import styled from 'styled-components';

const StyledNav = styled.nav`
    grid-area: hero;
    justify-self: end;
    align-self: start;
    padding-top: 2rem;
    padding-right: 2rem;
    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 8rem;
        list-style: none;
    }
    ul li {
        padding-left: 2rem;
        height: 100%;
    }
    ul li a {
        display: flex;
        align-items: center;
        height: 100%;
        text-decoration: none;
        color: white;
        font-size: 2.369em;
        font-family: ${props => props.theme.fontStack.serif};
    }
    ul li a:hover {
        color: black;
    }

    @media (max-width: 720px) {
        ul {
            height: 3rem;
        }
        ul li a {
            font-size: 1em;
        }
    }
`;

export default StyledNav;