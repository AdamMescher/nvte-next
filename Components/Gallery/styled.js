import styled from 'styled-components';

const StyledGallery = styled.section`
    width: 100%;
    padding-bottom: 1.5rem;
    h2 {
        padding: 3rem 0 3rem 0;
        width: 100%;
        display: flex;
        justify-content: center;
        font-family: ${props => props.theme.fontStack.serif};
        font-size: ${props => props.theme.fontSize.h2};
    }
    div {
        width: calc(100% - 6rem);
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
        grid-gap: 3rem;
        padding-left: 3rem;
        padding-right: 3rem;
        justify-items: center;
    }
    img {
        max-width: 100%;
        object-fit: cover;
    }
    @media (max-width: 600px) {
        h2 {
            padding: 1.5rem 0 1.5rem;
        }
        div {
            width: calc(100% - 3rem);
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            padding: 0 1.5rem 0 1.5rem;
        }
`;

export default StyledGallery;