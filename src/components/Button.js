import styled from "styled-components"
import {theme_one, theme_two} from "../themes/themes"

// el primary viene de theme_one y two

const Button = styled.button `
    font-size:1rem;
    border-radius:5px;
    margin:0 1rem;
    background: transparent;
    color: ${theme_one.primary};
    border: 2px solid blue;
    padding: 0.25rem 1rem; 
`
export default Button