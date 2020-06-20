import React from "react"
import styled from "styled-components"
import Button from "./Button"

const Menu = () => {
    return (
        <section className="
        uk-margin-large-left 
        uk-margin-large-top 
        uk-position-left 
        text-align-center
        
        ">
          <div className="uk-margin">   <span style={{color:"blue"}} uk-icon="icon: twitter; ratio: 2"></span> <br/>          </div>  

          <div className="uk-margin">  <span className="uk-margin-right"                          uk-icon="icon: home">      </span>  <strong style={{color:"black"}}>Inicio         </strong><br/>           </div>    
          <div className="uk-margin">  <span className="uk-margin-right" style={{color:"blue"}}   uk-icon="icon: hashtag">   </span>  <strong style={{color:"blue"}}>Explorar       </strong><br/>           </div>  
          <div className="uk-margin">  <span className="uk-margin-right"                          uk-icon="icon: forward">   </span>  <strong style={{color:"black"}}>Notificaciones </strong><br/>           </div>  
          <div className="uk-margin">  <span className="uk-margin-right"                          uk-icon="icon: mail">      </span>  <strong style={{color:"black"}}>Mensajes       </strong><br/>           </div>  
          <div className="uk-margin">  <span className="uk-margin-right"                          uk-icon="icon: bookmark">  </span>  <strong style={{color:"black"}}>Guardados      </strong><br/>           </div> 
          <div className="uk-margin">  <span className="uk-margin-right"                          uk-icon="icon: file-text"> </span>  <strong style={{color:"black"}}>Listas         </strong><br/>           </div> 
          <div className="uk-margin">  <span className="uk-margin-right"                          uk-icon="icon: user">      </span>  <strong style={{color:"black"}}>Perfil         </strong><br/>           </div> 
          <div className="uk-margin">  <span className="uk-margin-right"                          uk-icon="icon: more">      </span>  <strong style={{color:"black"}}>Más opciones   </strong><br/>           </div>  

          <Button className="uk-button uk-button-primary uk-border-pill"> Twittear</Button>

        </section>
)}

export default Menu