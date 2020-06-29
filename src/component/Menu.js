import styled, { css } from 'styled-components';
import { theme_one, them_two } from '../theme/themes';


export const Menu = styled.div`
  background: pink;
`;

export const Button = styled.button`
  font-size: 1rem;
  border-radius: 5px;
  padding: 0.25rem 1rem;
  margin: 0 1rem;
  background: transparent;
  color: ${props => props.theme.primary};
  border: 2px solid ${props => props.theme.primary};
`;