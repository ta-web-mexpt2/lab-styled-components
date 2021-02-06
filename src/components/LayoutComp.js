import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import "./Components.css";

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
import MenuComp from "./MenuComp";
import ButtonComp from "./ButtonComp";
import NavComp from "./NavComp";
import TendCard from "./TendCard";
import WhotoFollowCard from "./WhotoFollowCard";

export default function LayoutComp() {
  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;

  return (
    <div>
      <div className="divPpal">
        <div className="divMain">
          <Sider width={200} className="site-layout-background">
            <MenuComp />
            <ButtonComp messagebtn="Twittear" size="large"></ButtonComp>
          </Sider>
        </div>

        <div className="divMain" id="divCenter">
          <SearchBar />
          <NavComp />
          <img src="assets/picCovid.png"></img>
          <TendCard p1="Tendencia en México" p2="Vegeta" p3="14,6 mil Tweets" />
          <TendCard
            p1="Tendencia en México"
            p2="Carlos Name"
            p3="3.717 Tweets"
          />
          <TendCard
            p1="Videojuegos - Ayer"
            p2="Los anuncios del 'Pókemon Presents' dejaron todo tipo de sentimientos"
          />
        </div>

        <div className="divMain">
          <p id="p-to-follow">a quién seguir</p>
          <Sider className="site-layout-background">
            <WhotoFollowCard
              user_pic="assets/beach.jpeg"
              nickname="Ibai"
              user_id="@IbaiLlanos"
            />

            <WhotoFollowCard
              user_pic="assets/fortnite.jpg"
              nickname="Fortnite Status"
              user_id="@FortniteStatus"
            />
            <a href="#">Mostrar más</a>
          </Sider>
        </div>
      </div>
    </div>
  );
}
