import styled, {css} from "styled-components"


const BackgroundDiv = styled.div`
    background-color: ${props=> props.theme.primary};
    color:white;

     ${props =>
      props.primary && css`
        background: ${props=> props.theme.primary};
        color: white;
        border-color: ${props=> props.theme.primary};
      `};
    
    
`

export default BackgroundDiv