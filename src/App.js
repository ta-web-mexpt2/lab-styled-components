import React from 'react';
import './App.css';
import { Follow } from './components/Follow';
import VerticalMenu from './components/Menu';
import { News } from './components/News';


function App() {
  return (
    <div className="App">
      <VerticalMenu/>
      <News/>
      <Follow/>
    </div>
  );
}

export default App;
