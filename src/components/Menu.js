import React, {useState} from 'react'; 
import './styles.css'

import { Menu,Button,Switch} from 'antd';



function MenuBar () {
  const [theme, setTheme] = React.useState('light');

  const changeTheme = value => {
    setTheme(value ? 'dark' : 'light');
  };

    return (
      <>
      

        <div>
             <Menu
        style={{ width: 270 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        theme={theme}
        
        
      >
        <Switch
          checked={theme === 'dark'}
          onChange={changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
        <br />
        <br />
        <ion-icon size="large" style={{color:'blue', margin:15}} name="logo-twitter"></ion-icon>
        <Menu.Item  key="1" icon={<ion-icon style={{marginRight:10}} name="home" ></ion-icon>}>
          Inicio
        </Menu.Item>
        <Menu.Item key="2" icon={<ion-icon style={{marginRight:10}} name="menu"></ion-icon>}>
          Explorar
        </Menu.Item>
        <Menu.Item key="3" icon={<ion-icon style={{marginRight:10}} name="notifications"></ion-icon>}>
          Notificaciones
        </Menu.Item>
        <Menu.Item key="4" icon={<ion-icon style={{marginRight:10}} name="mail-open"></ion-icon>}>
          Mensajes
        </Menu.Item>
        <Menu.Item key="5" icon={<ion-icon style={{marginRight:10}} name="bookmark"></ion-icon>}>
          Guardados
        </Menu.Item>
        <Menu.Item key="6" icon={<ion-icon style={{marginRight:10}} name="paper"></ion-icon>}>
          Listas
        </Menu.Item>
        <Menu.Item key="7" icon={<ion-icon style={{marginRight:10}} name="person"></ion-icon>}>
          Perfil
        </Menu.Item>
        <Menu.Item key="8" icon={<ion-icon style={{marginRight:10}} name="more"></ion-icon>}>
          Mas opciones
        </Menu.Item>
        <Button type="primary" shape="round">
          Twittear
        </Button>
        
        
        
      </Menu>
        </div>
      </>
    )
}

export default MenuBar;