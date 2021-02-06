import React from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

export default function NavComp() {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="mail">Para ti</Menu.Item>
        <Menu.Item key="app">COVID-19</Menu.Item>
        <Menu.Item key="app">Tendencias</Menu.Item>
        <Menu.Item key="app">Noticias</Menu.Item>
        <Menu.Item key="app">Deportes</Menu.Item>
        <Menu.Item key="app">Diversión</Menu.Item>
      </Menu>
    </div>
  );
}
