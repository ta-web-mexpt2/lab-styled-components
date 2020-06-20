import React from "react"
import Button from "./Button"
import styled from "styled-components"
import {theme_one, theme_two} from "../themes/themes"

const ro = require("../img/ro.jpeg")


const Who = () => {
    return (

        <section className="uk-margin-left uk-margin-top uk-position-right" >


             <article className="uk-flex" style={{border: "solid 0.5px grey"}}   >
                <div>
                    <img src={ro} alt="" width="80" height="80" className="uk-border-circle"    />
                </div>
                
                <div className="uk-margin-left uk-margin-top">
                    <p>     <strong>Rod Amador</strong></p>
                    <p>      @rod_amador</p>
                </div>

                <div className="uk-margin-left uk-margin-medium-top">
                    <Button primary className="uk-button uk-button-muted">Seguir</Button>
                </div>
            </article>
            

            <article className="uk-flex"style={{border: "solid 0.5px grey"}}  >
                <div>
                    <img src={ro} alt="" width="80" height="80" className="uk-border-circle"    />
                </div>
                
                <div className="uk-margin-left uk-margin-top">
                    <p>     <strong>No soy yo</strong></p>
                    <p>     @te_clone_aTi</p>
                </div>

                <div className="uk-margin-left uk-margin-medium-top">
                    <Button primary className="uk-button uk-button-muted">Seguir</Button>
                </div>
            </article>

           <Button primary className="uk-button uk-button-primary uk-border-pill uk-align-center" >Mostrar más</Button>
            


        </section>      
)}

export default Who;