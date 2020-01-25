import styled from 'styled-components';

const StyledServices = styled.section`
    background-color: #313639;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
        display: flex;
        justify-content: center;
        font-family: ${props => props.theme.fontStack.sansSerif};
        font-size: ${props => props.theme.fontSize.h2};
    }
`;

export default StyledServices;
