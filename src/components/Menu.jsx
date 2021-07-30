import React, {Component} from 'react';
import { Menu, Button, Badge } from 'antd';
import {
  HomeOutlined,
  NotificationOutlined,
  MailOutlined,
  TagOutlined,
  FileTextOutlined,
  UserOutlined,
  MessageOutlined,
} from '@ant-design/icons';

import twLogo from '../assets/img/twitter.png'
import '../App.css'
export default class VerticalMenu extends Component{

  render() {
    return (
      <div className="menu-container">
        <Menu
          defaultSelectedKeys={['2']}
          mode="inline"
          theme="light"
        >
        <img src={twLogo} alt="Twitter logo" width="40px" />
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Inicio
          </Menu.Item>
          <Menu.Item key="2" icon="#">
            Explorar
          </Menu.Item>
          <Menu.Item key="3" icon={  <Badge dot><NotificationOutlined /> </Badge>}>
            Notificaciones
          </Menu.Item>
          <Menu.Item key="4" icon={<MailOutlined />}>
            Mensajes
          </Menu.Item>
          <Menu.Item key="5" icon={<TagOutlined />}>
            Guardados
          </Menu.Item>
          <Menu.Item key="6" icon={<FileTextOutlined />}>
            Listas
          </Menu.Item>
          <Menu.Item key="7" icon={<UserOutlined />}>
            Perfil
          </Menu.Item>
          <Menu.Item key="8" icon={<MessageOutlined />}>
            Más opciones
          </Menu.Item>
          <Button>Twittear</Button>
        </Menu>
      </div>
    );
  }
}
