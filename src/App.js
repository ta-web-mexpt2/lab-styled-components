import React, {useState} from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import './App.css';
import { Follow } from './components/Follow';
import VerticalMenu from './components/Menu';
import { News } from './components/News';
import SelectTheme from './components/SelectTheme';
import { theme_one, theme_two } from './theme';

const BkgdStyled = styled.body`
    display: flex;
    ${props =>
            props.primary && css`
            background: ${props => props.theme.dark};
            `}
`;


function App() {
  const [theme, setTheme] = useState(theme_one)

  const handleTheme = e => {
    let theme = e.target.value

    theme === 'theme_one' ? (theme = theme_one) : (theme = theme_two)

    setTheme(theme)
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BkgdStyled>
            <VerticalMenu/>
            <News/>
            <Follow/>
            <SelectTheme handleTheme={handleTheme}/>
          </BkgdStyled>
      </ThemeProvider>
    </div>
  );
}

export default App;
