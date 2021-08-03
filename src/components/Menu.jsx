import React from 'react'
import { Menu, Button, Badge } from 'antd';

import {
  AiOutlineTwitter,
  AiOutlineHome,
  AiOutlineKey,
  AiOutlineBell,
  AiOutlineMessage,
  AiOutlineBook,
  AiOutlineUnorderedList,
  AiOutlineUser,
  AiOutlineEllipsis
} from "react-icons/ai";

import '../App.css'
import styled from 'styled-components';

const SideMenu = styled.div`
      width: 216px;
      margin-left: 20px;
`;

export default function MenuComp() {
  return (
    <SideMenu>
      <Menu defaultSelectedKeys={["1"]} >
        <Menu.Item  key="1" icon={<AiOutlineTwitter />}> </Menu.Item>
        <Menu.Item  key="2" icon={<AiOutlineHome />}> Inicio</Menu.Item>
        <Menu.Item  key="3" icon={<AiOutlineKey/>}> Explorar</Menu.Item>
        <Menu.Item  key="4" icon={<Badge dot ><AiOutlineBell/> </Badge>}> Notificaciones</Menu.Item>
        <Menu.Item  key="5" icon={<AiOutlineMessage/>}> Mensajes</Menu.Item>
        <Menu.Item  key="6" icon={<AiOutlineBook />}> Guardados</Menu.Item>
        <Menu.Item  key="7" icon={<AiOutlineUnorderedList />}> Listas</Menu.Item>
        <Menu.Item  key="8" icon={<AiOutlineUser />}> Perfil</Menu.Item>
        <Menu.Item  key="9" icon={<AiOutlineEllipsis/>}> Más opciones</Menu.Item>
      </Menu>
      <Button className="Button">Twittear</Button>
      </SideMenu>
  );
}