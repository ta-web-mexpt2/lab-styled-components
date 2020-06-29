import React from 'react';
import './App.css';
import { Menu } from './component/Menu';

// how to import ionicons
import LogoTwitter from 'react-ionicons/lib/LogoTwitter';
import IosBasketOutline from 'react-ionicons/lib/IosBasketOutline';
import MdHome from 'react-ionicons/lib/MdHome';
import IosNotificationsOutline from 'react-ionicons/lib/IosNotificationsOutline';
import IosMailOutline from 'react-ionicons/lib/IosMailOutline';
import IosPaperOutline from 'react-ionicons/lib/IosPaperOutline';
import MdMore from 'react-ionicons/lib/MdMore';
import IosHappyOutline from 'react-ionicons/lib/IosHappyOutline';

function App() {
  return (
    <div>
      <header className="App-header">
        <Menu/>
        <LogoTwitter/>
      
        <MdHome/>
        <IosBasketOutline/>
        <IosNotificationsOutline/>
        <IosMailOutline/>
        <IosPaperOutline/>
        <MdMore/>
        <IosHappyOutline/>
        <Button/>
      </header>
    </div>
  );
}

export default App;
