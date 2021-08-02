import React from 'react'; 
import { useState } from 'react';
import styled, { ThemeProvider } from "styled-components";
import { Switch ,Input} from 'antd';

//import SelectTheme from "./components/Theme";

//import { theme_one,theme_two } from "./theme";
import './App.css';
import MenuBar from './components/Menu';
import News from './components/News';

const AppWrapper = styled.div`
text-aling:center;
background-color: ${props => props.theme.primary};
color:black;
`;

const AppTitle = styled.h1`
    font-size:30px;
    color:#fff;
    background-color:black;
`;

const { Search } = Input;




function App() {
  
  return (
      <>

      

      
      <AppWrapper style={{display:'flex',
      flexDirection:'row',
      }}
      >
      <MenuBar
        
      ></MenuBar>
      <div>
     
    <News/>
      </div>
      
      </AppWrapper>
      
      </>
    

  

    //     <MenuBar/>

    //     <SelectTheme handleTheme={handleTheme}/>
    //   </AppWrapper>
    // </ThemeProvider>
  );
}

export default App;
