import styled, {css} from "styled-components"

const Button = styled.button`
    font-size:1rem;
    border-radius:5px;
    margin:0 1rem;
    background:transparent;
    color:${props => props.theme.dark};
    border:2px solid ${props => props.theme.primary};
    padding:0.25rem 1rem;

    ${props =>
      props.primary && css`
        background: ${props=> props.theme.light};
        color: ${props=> props.theme.dark};;
        border-color: ${props=> props.theme.primary};
      `};
`;

export default Button