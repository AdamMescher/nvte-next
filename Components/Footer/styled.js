import styled from 'styled-components';

const StyledFooter = styled.footer`
    height: 40vh;
    width: 100%;
    background-color: #202225;
    padding-bottom: 2rem;
    background-image: url('/icons/ntve-logo-black.svg');
    background-size: auto 70%;
    background-repeat: no-repeat;
    background-position: center center;
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
        color: black;
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