import React from 'react';
import { Layout, Menu} from 'antd';

const {Content} = Layout

function NewsApp(){
    return(
        
        
        <Content
            className="site-layout-background"
            

          >
              <div>

              <Menu
         style={{
             display:"flex",
             flexDirection:"row",
             backgroundColor:'#0000',
            }}
        
        
          defaultSelectedKeys={['1']}
         
        
        > 
        <Menu.Item key="1" >
        Inicio
        </Menu.Item>
        <Menu.Item key="2" >
          Explorar
        </Menu.Item>
        <Menu.Item key="3" >
          Notificaciones
        </Menu.Item>
        <Menu.Item key="4" >
          Mensajes
        </Menu.Item>
        <Menu.Item key="5" >
          Guardados
        </Menu.Item>
        <Menu.Item key="6" >
          Listas
        </Menu.Item>
        <Menu.Item key="7" >
          Perfil
        </Menu.Item>
        <Menu.Item key="8" >
          Mas Opciones
        </Menu.Item>
        
      </Menu>
         
                
                </div>
            <div
            style={{
                marginTop:5,
                marginLeft:0,
                backgroundImage:"url(https://www.telemundo.com/sites/nbcutelemundo/files/styles/focal-758x379/public/ap21213432515251.jpg?ramen_itok=iqwQftIcTf)",
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover",
                width: "100%",
                height: 490
              }} >
                 <div>
                
                     <h1
                     style={{
                         paddingTop:410,
                         color:"#fff ",
                     }}>"Me siento en las nubes": Yulimar Rojas rompe el récord mundial en salto triple</h1>
                 </div>
            </div>
          </Content>
    )
}

export default NewsApp