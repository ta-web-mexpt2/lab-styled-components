import { useState } from 'react';
import React from 'react';
import './App.css';
import  Menu from './components/Menu'
import News from './components/News'
import  FollowApp from './components/Follow'





function App() {
  
  
  return (
    
           <div style={{
             display:"flex",
           flexDirection:"row"}} className="App">
             
             <Menu/>
                 
             
             <News/>
             <FollowApp/>
               
           </div>
        
  );
}

        export default App;

