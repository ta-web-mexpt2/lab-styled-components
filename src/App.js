import React from 'react';
import { Layout } from 'antd';
import Menu from './components/menu';
import './App.css';
import Who from "./components/who2follow";
import News from "./components/news"

const {Sider, Content} = Layout 

function Site() {
  return (
    <div className="App" id ="body">
      <Layout className="LayoutSider1">
      <Sider className="Sider">
        <Menu/>
      </Sider>
      </Layout>
      <Layout className="LayoutMain">
      <Content className="MainContent">
        <News/>
      </Content>
      </Layout>
      <Layout className="LayoutSider2">
       <Sider className="Sider">
           <Who/>
        </Sider>
       </Layout>
    </div>
  );
}

export default Site;
