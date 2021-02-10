import React from "react";
import { Menu } from "antd";
import SearchBar from "./Search";

export default function NavComp() {
  
    return (
    <div className="Bloque2">
        <div>
        <SearchBar/>
        </div>
        <div >
        <Menu
        className="Navabar"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        >
        <Menu.Item className="Navabar" key="1">Para ti</Menu.Item>
        <Menu.Item className="Navabar"key="2">COVID-19</Menu.Item>
        <Menu.Item className="Navabar"key="3">Tendencias</Menu.Item>
        <Menu.Item className="Navabar"key="4">Noticias</Menu.Item>
        <Menu.Item className="Navabar"key="5">Deportes</Menu.Item>
        <Menu.Item className="Navabar"key="6">Diversión</Menu.Item>
      </Menu>
        </div>
        <div >
          <div className="div1"
          style= {{backgroundImage:"url('https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/02/08/16127542917213.jpg')"}}>
              <h6>Noticias . Hace una hora</h6>
              <h1>Tom Brady se convierte en deportista histórico tras ganar Super Bowl LV</h1></div>
          </div>
       jhjh
      
    </div>
  );
}