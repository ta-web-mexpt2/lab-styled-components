import React from 'react';
import { Menu, Layout } from 'antd';
import { TwitterOutlined, MailOutlined, BellOutlined, HomeOutlined } from '@ant-design/icons';
import { RiFileList2Line } from "react-icons/ri";
import {BsBookmark} from "react-icons/bs";
import {AiOutlineUser} from "react-icons/ai";
import { CgMoreO } from "react-icons/cg";


const {Sider, Content} = Layout
export default class App extends React.Component {
  state = {
    current: 'Home',
  };
 
  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
     
        <Menu className="Menu" onClick={this.handleClick} selectedKeys={[current]} mode="vertical">
          <Menu.Item className="MenuItem" key="Login" icon={<TwitterOutlined />} />
          <Menu.Item className="MenuItem" key="Home" icon={<HomeOutlined />} >Inicio</Menu.Item>
          <Menu.Item className="MenuItem" key="notifications" icon={<BellOutlined/>} >Notificaciones</Menu.Item>
          <Menu.Item className="MenuItem" key="message" icon={<MailOutlined />} >Message</Menu.Item>
          <Menu.Item className="MenuItem" key="saved" icon={<BsBookmark/>}>Guardados</Menu.Item>
          <Menu.Item className="MenuItem" key="lists" icon={<RiFileList2Line/>}>Listas</Menu.Item>
          <Menu.Item className="MenuItem" key="profile" icon={<AiOutlineUser/>}>Perfil</Menu.Item>
          <Menu.Item className="MenuItem" key="moreoptions" icon={<CgMoreO/>}>Más opciones</Menu.Item>
          <Menu.Item><button>Twittear</button></Menu.Item>
        </Menu>
  
    );
  }
}
