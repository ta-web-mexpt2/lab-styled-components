import React from 'react';
import Menu from './components/menu';
import Who from './components/who';
import News from './components/news';
import styled from "styled-components"



function App() {
  return (
    <div uk-grid className="uk-flex">

      <section className="uk-child-width-1-4"> <Menu/>  </section>

      <section className="uk-child-width-2-4"> <News/> </section>

      <section className="uk-child-width-1-4"> <Who/>  </section>
     
     
      
    </div>
  );
}

export default App;
