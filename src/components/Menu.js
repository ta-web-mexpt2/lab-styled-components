import React from "react";
import { Menu, Button} from "antd";
import { AiOutlineTwitter} from "react-icons/ai";




export default function MenuComp () {
  return (
    <div >
      <Menu   
        className="Menu" 
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
      >
        <Menu.Item className="Menu"key="1" icon={<AiOutlineTwitter />}> </Menu.Item>
        
      </Menu>
      <Button className="Button">Twittear</Button>
    </div>
  );
} 