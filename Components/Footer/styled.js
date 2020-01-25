import styled from 'styled-components';

const StyledFooter = styled.footer`
    height: 40vh;
    width: 100%;
    background-image: url('/patterns/dark-triangles.png');
    padding-bottom: 2rem;
    ul {
        list-style: none;
        padding: 2rem 0 2rem 0;
        display: flex;
        justify-content: center;
    }
    ul li {
        margin-right: 5rem;
    }
    ul li:last-child {
        margin: 0;
    }
    ul li a {
        font-size: 2rem;
        color: white;
        text-decoration: none;
    }
    ul li a:hover {
        color: #7E7E7E;
    }
    div {
        display: flex;
        justify-content: center;
    }
    .nvte-logo-bot {
        height: 150px;
        filter: invert(1);
    }
    @media (max-width: 650px) {
        ul li {
            margin-right: 2rem;
        }
        ul li a {
            font-size: 1.1em;
        }
    }
`;

export default StyledFooter;