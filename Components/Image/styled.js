import styled from 'styled-components';
const gutter = 2;
const StyledImage = styled.div`
    background-color: '#eee';
    box-sizing: 'border-box';
    float: 'left';
    margin: 2;
    overflow: 'hidden';
    padding-bottom: '16%';
    position: relative;
    width: 'calc(25% - ${gutter - 2}px)';
    :hover {
        opacity: 0.9
    }
`;

export default StyledImage;