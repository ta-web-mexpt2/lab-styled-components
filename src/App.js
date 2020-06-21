import React,{useState} from 'react';

import Menu from './components/menu';
import News from "./components/news"
import Who from "./components/who"
import BackgroundDiv from "./components/BackgroundDiv"

//boton es change theme 
//provider es lo que permite compartir el cambio
//themes son los colores
import ThemeSelect from "./components/ChangeTheme"
import {ThemeProvider } from 'styled-components';
import { theme_one, theme_two } from './themes/themes';

function App() {
  const [theme,setTheme]= useState(theme_one)

  //permitirá cambiar el theme al mover el color
  const handleThemeChange = (e)=>{
    let theme = e.target.value
    theme === 'theme_one' ? (theme = theme_one) : (theme = theme_two)
    setTheme(theme)
  }

  return (
    <ThemeProvider theme={theme}>
      <BackgroundDiv primary  uk-grid className="uk-flex">
      <section className="uk-child-width-1-4"> <Menu/>  </section>
      <section className="uk-child-width-2-4"> <News/> </section>
      <section className="uk-child-width-1-4"> <Who/>  </section>
      <ThemeSelect handleThemeChange={handleThemeChange}/>
      </BackgroundDiv>
    </ThemeProvider>

  );
}

export default App
