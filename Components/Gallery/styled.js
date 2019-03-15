import styled from 'styled-components';

const StyledGallery = styled.section`
    width: 100%;
    padding-bottom: 1.5rem;
    h2 {
        width: 100%;
        display: flex;
        justify-content: center;
        font-family: ${props => props.theme.fontStack.sansSerif};
        font-size: ${props => props.theme.fontSize.h2};
    }
    div {
        display: flex;
        justify-items: center;
    }
    img {
        max-width: 100%;
        object-fit: cover;
    }
    @media (max-width: 600px) {
        h2 {
            padding: 0.5rem 0 0.5rem;
        }
        div {
            width: calc(100% - 1rem);
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            padding: 0 0.5rem 0 0.5rem;
        }
`;

export default StyledGallery;
