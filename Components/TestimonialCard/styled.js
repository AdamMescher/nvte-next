import styled from 'styled-components';

const StyledTestimonialCard = styled.div`
padding: 0 6rem 0 6rem;
    display: flex;
    .container {
        display: flex;
        flex-direction: column;
        margin-left: 2rem;
    }
    .body {
        font-family: ${props => props.theme.fontStack.serif};
    }
    .name {
        font-family: ${props => props.theme.fontStack.sansSerif};
    }
    .quotes {
        align-self: flex-start;
        height: 4rem;
    }
`;

export default StyledTestimonialCard;