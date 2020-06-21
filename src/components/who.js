import React from "react"
import Button from "./Button"
import BackgroundDiv from "./BackgroundDiv"

const ro = require("../img/ro.jpeg")


const Who = () => {
    return (

        <BackgroundDiv className="uk-margin-left uk-margin-top uk-position-right" >


             <article className="uk-flex uk-margin-bottom uk-margin-medium-top" style={{backgroundColor: "black"}}   >
                <div> <img src={ro} alt="" width="80" height="80" className="uk-border-circle"    /> </div>
                <div className="uk-margin-left uk-margin-top">
                    <p>     <strong>Rod Amador</strong></p>
                    <p>      @rod_amador</p>
                </div>

                <div className="uk-margin-left uk-margin-medium-top">
                    <Button primary className="uk-button uk-button-primary">Seguir</Button>
                </div>
            </article>
            

            <article className="uk-flex"style={{border: "solid 0.5px grey"}} style={{backgroundColor: "black"}}  >
                <div>   <img src={ro} alt="" width="80" height="80" className="uk-border-circle"    />  </div>
                <div className="uk-margin-left uk-margin-top">
                    <p>     <strong>No soy yo</strong></p>
                    <p>     @te_clone_aTi</p>
                </div>

                <div className="uk-margin-left uk-margin-medium-top" style={{backgroundColor: "black"}}>
                    <Button primary className="uk-button uk-button-primary">Seguir</Button>
                </div>
            </article>

           <Button primary className="
                uk-button uk-button-primary uk-border-pill 
                uk-position-center
                " >Mostrar más</Button>
            


        </BackgroundDiv>      
)}

export default Who;