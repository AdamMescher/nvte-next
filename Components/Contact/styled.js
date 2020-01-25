import styled from 'styled-components';

const StyledContact = styled.section`
    width: 100%;
    background-image: url('/patterns/dot-grid.png');
    h2 {
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 3rem 0 0 0;
        font-family: ${props => props.theme.fontStack.sansSerif};
        font-size: ${props => props.theme.fontSize.h2};
    }
`;

export default StyledContact;