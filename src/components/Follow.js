import React from 'react';
import '../App.css';


export default class Follow extends React.Component {
    render({name,image,alias}=this.props) {
      return (
                <div className="Users">
                    <div><img className="TwitterProfilePhoto" src={image} /></div>
                    <div>
                     <h4 className="Usertext1">{name}</h4>
                     <h6 className="Usertext2">{alias}</h6>
                  </div>
                <div className="seguir"><button>Seguir</button></div>
                </div>);
    }
};