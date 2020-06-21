import React from "react"
import BackgroundDiv from "./BackgroundDiv"

const News = () => {
    return (
        <BackgroundDiv className=" uk-position-center uk-margin-top">

            <div className="uk-card uk-card-default uk-margin" style={{border: "solid 0.5px grey"}}>
                <div className="uk-card-header">
                    <h4 className="uk-text-center"><strong >   Rod Amador  </strong>   @rod_amador             </h4>
                </div>

                <div className="uk-card-body">
                    <p className="uk-text-center">Bla bla bla bla bla bla odio a todos bla bla bla bla bla</p>
                </div>
            </div>


            <div className="uk-card uk-card-default uk-margin" style={{border: "solid 0.5px grey"}}>
                <div className="uk-card-header">
                    <h4 className="uk-text-center"><strong >   Una morra básica  </strong>   @soy_básica             </h4>
                </div>

                <div className="uk-card-body">
                    <p className="uk-text-center">Hoy, fulanita trajo el mismo vestido que yoooooo. Naca asqueroooosa</p>
                </div>
            </div>


            <div className="uk-card uk-card-default uk-margin" style={{border: "solid 0.5px grey"}}>
                <div className="uk-card-header">
                    <h4 className="uk-text-center"><strong >   El random  </strong>   @soy_impredecible             </h4>
                </div>

                <div className="uk-card-body">
                    <p className="uk-text-center">Me comi un zapato.... Y me gustó</p>
                </div>
            </div>


            <div className="uk-card uk-card-default uk-margin" style={{border: "solid 0.5px grey"}}>
                <div className="uk-card-header">
                    <h4 className="uk-text-center"><strong >   La despechada  </strong>   @estoy_loca             </h4>
                </div>

                <div className="uk-card-body">
                    <p className="uk-text-center">Extraño tanto el olor de su camisa sudada :´( ahora quien me soportará</p>
                </div>
            </div>


        </BackgroundDiv>
)}

export default News