import React from 'react';
import { Layout } from 'antd';
import {Menu, Navbar} from './components/Index';
import './App.css';
import Who from "./components/WhoToFollow.js";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
      <Layout>
      <Sider>
      <Menu/>
      </Sider>
      <Layout>
        <Header>
          <Navbar/>
        </Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
}

export default App;