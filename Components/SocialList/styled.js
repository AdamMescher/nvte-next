import styled from 'styled-components';

const StyledSocialList = styled.ul`
    display: flex;
    justify-content: center;
    li {
        padding: 0 1rem 0 1rem;
    }
    img {
        height: 2rem;
    }
    img:hover {
        filter: invert(0.5);
    }
`;

export default StyledSocialList;