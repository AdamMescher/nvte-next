import styled from 'styled-components';

const StyledSimpleSlider = styled.div`
    width: 60%;
    margin-left: 20%;
    .item h3 {
        color: white;
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .slick-prev:before,
    .slick-next:before {
        color: black;
        font-size: 3rem;
    }
`;

export default StyledSimpleSlider;