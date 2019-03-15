import styled from 'styled-components';

const StyledAbout = styled.section`
    padding: 6rem 0 6rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
        display: flex;
        justify-content: center;
        font-family: ${props => props.theme.fontStack.sansSerif};
        font-size: ${props => props.theme.fontSize.h2};
    }
    p {
        width: 60%;
        margin-left: 20%;
        display: flex;
        justify-content: center;
        padding-top: 2.5rem;
        font-family: ${props => props.theme.fontStack.serif};
    }

`;

export default StyledAbout;