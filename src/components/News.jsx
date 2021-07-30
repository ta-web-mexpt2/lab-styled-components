import React, { useState } from 'react'
import {Input, Menu, Carousel, Collapse } from 'antd'
import { SettingOutlined, SearchOutlined } from '@ant-design/icons';
import '../App.css'



export function News(){

    const [current, setCurrent] = useState('home')

    const handleClick = e => {
        setCurrent({current: e.key})
    }

    const contentStyle = {
        height: '300px',
        color: '#fff',
        lineHeight: '500px',
        textAlign: 'left',
        background: 'no-repeat center/100% url(https://www.playadelcarmen.com/blog/wp-content/uploads/CoronaVirus_Testing_Cancun-1-min-min-960x600.png)'
      }

      const {Panel} = Collapse;

      const text = `
            A dog is a type of domesticated animal.
            Known for its loyalty and faithfulness,
            it can be found as a welcome guest in many households across the world.
            `;


    return(
        <section className="news-container">
                   <Input prefix={<SearchOutlined />} addonAfter={<SettingOutlined />} defaultValue="Buscar en Twitter" />

                   <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                      <Menu.Item key="home"> Para ti </Menu.Item>
                      <Menu.Item key="covid"> COVID-19 </Menu.Item>
                      <Menu.Item key="tendency"> Tendencias </Menu.Item>
                      <Menu.Item key="news"> Noticias </Menu.Item>
                      <Menu.Item key="sports"> Deportes </Menu.Item>
                      <Menu.Item key="fun"> Diversión </Menu.Item>
                   </Menu>

                   <Carousel effect="fade">
                        <div>
                        <p style={contentStyle}>Covid-19  ·<span>     Hace 1 hora</span>
                        </p>
                        </div>
                    </Carousel>

                    <Collapse
                        expandIconPosition='right'
                        >
                        <Panel header="Vegeta" text="sdfsd">
                            <div>{text}</div>
                        </Panel>
                        <Panel header="Carlos Name">
                            <div>{text}</div>
                        </Panel>
                        <Panel header="Los anuncios del 'Pokemón Presents' dejaron todo tipo de sentimientos">
                            <div>{text}</div>
                        </Panel>
                     </Collapse>
        </section>
    )
}