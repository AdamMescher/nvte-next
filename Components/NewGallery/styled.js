import styled from 'styled-components';

const StyledNewGallery = styled.section`
    height: 100%;
    padding-top: 6rem;
    padding-bottom: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
        background-color: red;
        display: flex;
        justify-content: center;
        font-family: ${props => props.theme.fontStack.sansSerif};
        font-size: ${props => props.theme.fontSize.h2};
    }
    img {
        height: 500px;
        cursor: pointer;
        position: 'absolute';
        max-width: '100%';
        background: teal;
    }
`;

export default StyledNewGallery;