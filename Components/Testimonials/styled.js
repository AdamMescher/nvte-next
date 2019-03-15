import styled from 'styled-components';

const StyledTestimonials = styled.section`
    h2 {
        padding: 1rem 0 1rem 0;
        width: 100%;
        display: flex;
        justify-content: center;
        font-family: ${props => props.theme.fontStack.sansSerif};
        font-size: ${props => props.theme.fontSize.h2};
    }
`;

export default StyledTestimonials;