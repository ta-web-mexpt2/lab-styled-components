import React from 'react';
import { List, Avatar, Button } from 'antd';
import '../App.css'

const data = [
  {
    title: 'Ibai',
    description: '@IbaiLlanos'
  },
  {
    title: 'Fortnite Status',
    description: '@FortniteStatus'
  },
];

export function Follow(){
    return(
        <section className="follow-container">
        <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<a href="/">{item.title}</a>}
              description={item.description}
            />
              <Button> Seguir</Button>
          </List.Item>
        )}
      />
        <Button> Mostrar Más </Button>
        <p> Condiciones de Servicio
            Política de Privacidad
            Política de cookies
            Información de anuncios
            Más opciones
            © 2021 Twitter, Inc. </p>
      </section>
    )
}