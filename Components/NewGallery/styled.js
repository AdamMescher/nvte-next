import styled from 'styled-components';

const StyledNewGallery = styled.section`
    padding-top: 6rem;
    padding-bottom: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
        display: flex;
        justify-content: center;
        font-family: ${props => props.theme.fontStack.sansSerif};
        font-size: ${props => props.theme.fontSize.h2};
    }
`;

export default StyledNewGallery;