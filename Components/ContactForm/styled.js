import styled from 'styled-components';

const StyledContactForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    label {
        width: 60%;
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
        font-size: 1.3em;
        font-family: ${props => props.theme.fontStack.sansSerif};
    }
    input,
    textarea {
        margin-top: 0.5rem;
        font-size: 1.3em;
        padding: 0.75rem;
        border: 2px solid black;
    }
    input::placeholder {
        font-family: ${props => props.theme.fontStack.serif};
    }
    textarea::placeholder {
        font-family: ${props => props.theme.fontStack.monospace};
    }
    input[type="submit"] {
        width: 60%;
        background: white;
        border: 2px solid black;
        font-size: 2em;
        margin: 2rem 0 2rem 0;
        padding: 1rem 4rem 1rem 4rem;
    }
    input[type="submit"]:hover {
        background-color: black;
        color: white;
        cursor: pointer;
    }
    @media (max-width: 700px) {
        label,
        input[type="submit"] {
            width: 90%;
            font-size: 1.2em;
        }
    }
`;

export default StyledContactForm;