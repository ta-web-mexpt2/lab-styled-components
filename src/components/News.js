import React from "react";
import { Menu,Input,Space,Switch } from "antd";
import './styles.css'
const { Search } = Input;


export default function News() {

  const [theme, setTheme] = React.useState('light')
  const changeTheme = value => {
    setTheme(value ? 'dark' : 'light');
  };
    
    return (
    <div>
      
        <div>
        <Switch
          checked={theme === 'dark'}
          onChange={changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
        <br />
        <Space direction="horizontal">
    <Search placeholder="Buscar en twitter" style={{ width: 600 }} />
   
    </Space>
        </div>
        <div >
        <Menu style={{display:'flex',flexDirection:'row'}}
        className="Navbar"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        theme={theme}
        >
        <Menu.Item key="1">Para ti</Menu.Item>
        <Menu.Item key="2">COVID-19</Menu.Item>
        <Menu.Item key="3">Tendencias</Menu.Item>
        <Menu.Item key="4">Noticias</Menu.Item>
        <Menu.Item key="5">Deportes</Menu.Item>
        <Menu.Item key="6">Diversión</Menu.Item>
      </Menu>
        </div>
        <div >
          <div className="div1"
          style= {{backgroundImage:"url('https://image.cnbcfm.com/api/v1/image/104374214-GettyImages-632238036.jpg?v=1551389591&w=630&h=354')",width:650,height:350}}>
              <div style={{paddingTop:260,fontSize:20, fontWeight:50,textShadow:'1px 1px black'}}>
              <h6 style={{color:'white'}}>Noticias . Hace una hora</h6>
              <h1 style={{color:'white',paddingTop:"200"}}>Obama se casa con Trump</h1></div>
              </div>  
          </div>
       

    </div>
  );
} 
