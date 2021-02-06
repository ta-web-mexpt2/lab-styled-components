import React from "react";
import { Menu, Button } from "antd";

import {
  HomeOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  BellFilled,
  MessageFilled,
} from "@ant-design/icons";

const { SubMenu } = Menu;

export default function MenuComp() {
  return (
    <div>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
      >
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Inicio
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Explorar
        </Menu.Item>
        <Menu.Item key="3" icon={<BellFilled />}>
          Notificaciones
        </Menu.Item>
        <Menu.Item key="4" icon={<MessageFilled />}>
          Mensajes
        </Menu.Item>
        <Menu.Item key="5" icon={<ContainerOutlined />}>
          Guardados
        </Menu.Item>
        <Menu.Item key="6" icon={<ContainerOutlined />}>
          Listas
        </Menu.Item>
        <Menu.Item key="7" icon={<ContainerOutlined />}>
          Perfil
        </Menu.Item>
        <Menu.Item key="8" icon={<MessageFilled />}>
          Más opciones
        </Menu.Item>
      </Menu>
    </div>
  );
}
