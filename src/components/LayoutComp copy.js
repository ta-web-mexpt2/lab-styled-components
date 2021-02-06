import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
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
import HeaderComp from "./HeaderComp";
import SearchBar from "./SearchBar";

export default function LayoutComp() {
  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;

  return (
    <div>
      <Layout>
        <Header className="header">
          <div className="logo"></div>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              theme="light"
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
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <HeaderComp />
              Content
            </Content>
          </Layout>

          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menu
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
                theme="light"
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
            </Sider>
          </Layout>
          <SearchBar />
        </Layout>
      </Layout>
    </div>
  );
}
