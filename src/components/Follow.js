import React from 'react'
import { Card,Button,Avatar,Image} from 'antd';

function FollowApp(){
    return(
        <div>
            <div className="site-card-border-less-wrapper">
    <Card title="A quien seguir" bordered={false} style={{ width: 300 }}>
    <Avatar 
    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /><p >Dylan</p> <Button type="primary" shape="round" icon={""}>
          Seguir
        </Button>
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /><p>Jorge</p> <Button type="primary" shape="round" icon={""}>
          Seguir
        </Button>
     
    </Card>
  </div>
        </div>
    )
}

export default FollowApp
