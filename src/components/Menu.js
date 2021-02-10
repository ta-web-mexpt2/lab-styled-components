import React from "react";
import { Menu, Button,Switch } from "antd";
import {
  AiOutlineTwitter,
  AiOutlineHome,
  AiOutlineKey,
  AiOutlineBook,
  AiOutlineUnorderedList,
  AiOutlineBell,
  AiOutlineMessage,
  AiOutlineUser,
  AiOutlineEllipsis
} from "react-icons/ai";




export default function MenuComp() {
  return (
    <div >
      <Menu   
        className="Menu" 
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
      >
        <Menu.Item className="Menu"key="1" icon={<AiOutlineTwitter />}> </Menu.Item>
        <Menu.Item className="Menu"key="2" icon={<AiOutlineHome />}> Inicio</Menu.Item>
        <Menu.Item className="Menu"key="3" icon={<AiOutlineKey/>}> Explorar</Menu.Item>
        <Menu.Item className="Menu"key="4" icon={<AiOutlineBell/>}> Notificaciones</Menu.Item>
        <Menu.Item className="Menu"key="5" icon={<AiOutlineMessage/>}> Mensajes</Menu.Item>
        <Menu.Item className="Menu"key="6" icon={<AiOutlineBook />}> Guardados</Menu.Item>
        <Menu.Item className="Menu"key="7" icon={<AiOutlineUnorderedList />}> Listas</Menu.Item>
        <Menu.Item className="Menu"key="8" icon={<AiOutlineUser />}> Perfil</Menu.Item>
        <Menu.Item className="Menu"key="9" icon={<AiOutlineEllipsis/>}> Más opciones</Menu.Item>
      </Menu>
      <Button className="Button">Twittear</Button>
    </div>
  );
}