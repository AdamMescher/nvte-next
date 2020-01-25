import styled from 'styled-components';

const StyledImage = styled.div`
    img {
        width: 100%;
        object-fit: cover;
        border-radius: 4px;
    }
    }
    img :hover {
        opacity: 0.9;
        cursor: pointer;
    }
`;

export default StyledImage;