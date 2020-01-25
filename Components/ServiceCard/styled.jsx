import styled from 'styled-components';

const StyledServiceCard = styled.li`
    display: flex;
    justift-content: center;
    align-items: center;
    width: 100%;
    font-family: ${props => props.theme.fontStack.sansSerif};
    padding: 8px 12px 8px 12px;
    img {
        height: 42px;
    }

    h3 {
        font-family: ${props => props.theme.fontStack.sansSerif};
        font-size: ${props => props.theme.fontSize.h4};
        whitespace: no-wrap;
        margin-left: 32px;
    }

    @media(max-width: 900px){
        padding: 4px 8px 4px 8px;
        img {
            height: 32px;
        }
        h3 {
            font-size:${props => props.theme.fontSize.h5};
        }
    }

    @media(max-width: 500px){
        img {
            height: 24px;
        }
        h3 {
            margin-left: 16px;
        }
    }
`;

export default StyledServiceCard;