import styled from 'styled-components';

const StyledHero = styled.section`
    display: grid;
    grid-template-areas: "hero";
    height: 100vh;
    width: 100%;
    a {
        grid-area: hero;
        justify-self: start;
        align-self: start;
    }
    a:hover img {
        filter: invert(1.0);
    }
`;

export default StyledHero;