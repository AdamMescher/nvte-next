import styled from 'styled-components';

const StyledServiceCardList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    grid-gap: 50px;
    li:hover img {
        transform: scale(1.5);
    }
    @media(max-width: 900px){
        grid-template-columns: 1fr 1fr;
        grid-gap: 25px;
    }
    @media(max-width: 500px){
        grid-template-columns: 1fr;
        grid-gap: 10px;
    }
`;

export default StyledServiceCardList;