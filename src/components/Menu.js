import React from "react";
import {useState} from "react";
import styled from 'styled-components'
import {Menu,Button} from 'antd'
import { red } from "kleur";
import { Input } from 'antd';





function AntdApp(){
    return(

        

        
    <div>

<Input placeholder="Buscar en Twitter" 
icon={<ion-icon name="search"></ion-icon>}/>
        
        <Menu
         style={{
            backgroundColor:'#0000',
            height:500,
            padding: 24,
            
            minHeight: 280,
            }}
        
        
          defaultSelectedKeys={['1']}
         
        
        >

            

            

        <ion-icon name="logo-twitter"></ion-icon>
          <Menu.Item key="1" icon={<ion-icon name="home"></ion-icon>}>
          Inicio
          </Menu.Item>
          <Menu.Item key="2" icon={<ion-icon name="apps"></ion-icon>}>
            Explorar
          </Menu.Item>
          <Menu.Item key="3" icon={<ion-icon name="notifications-outline"></ion-icon>}>
            Notificaciones
          </Menu.Item>
          <Menu.Item key="4" icon={<ion-icon name="mail"></ion-icon>}>
            Mensajes
          </Menu.Item>
          <Menu.Item key="5" icon={<ion-icon name="attach"></ion-icon>}>
            Guardados
          </Menu.Item>
          <Menu.Item key="6" icon={<ion-icon name="list"></ion-icon>}>
            Listas
          </Menu.Item>
          <Menu.Item key="7" icon={<ion-icon name="person"></ion-icon>}>
            Perfil
          </Menu.Item>
          <Menu.Item key="8" icon={<ion-icon name="share"></ion-icon>}>
            Mas Opciones
          </Menu.Item>
          <Button type="primary" shape="round" icon={""}>
          Twittear
        </Button>
        </Menu>
           
        
        
       
    </div>


    )
}


export default AntdApp






