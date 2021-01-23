import React from 'react';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import {BsGear} from "react-icons/bs";
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = value => console.log(value);

export default class News extends React.Component {
    render() {
    return(
       <div>
             <Space direction="horizontal">
                <Search  className="Searchbox" placeholder="input search text" onSearch={onSearch} /> <p icon={<BsGear/>}></p>
             </Space>

         <div className="Horizontal">
                <p><a href=""> Para Ti   </a></p>
                <p><a href=""> COVID19   </a></p>
                <p><a href=""> Tendencias   </a></p>
                <p><a href=""> Noticias   </a></p>
                <p><a href=""> Deportes   </a></p>
                <p><a href=""> Diversión  </a></p>
                <p><a href=""> Eventos  </a></p>
                <p><a href=""> Moda  </a></p>
                <p><a href=""> Entretenimiento  </a></p>
          </div>

          <div className="Ultimanoticia">
          <img src="https://dynaimage.cdn.cnn.com/cnn/digital-images/org/07d47e30-f9ad-42f4-a27b-b3d5be31e0ba.jpg"/>
          </div>
          <div className="UNtext">
              <h6>Noticias . Hace una hora</h6>
              <h1>Biden se enfoca en la economía en su segundo día como presidente</h1></div>
       </div>
       );

    }
}




