import React from "react"
import CanvasData from "../../accessories/CanvasData"


const Positive = (props) => {

    return(
        <div className="this__garnes">
        {props.positive.map(p => {
            return <CanvasData
                key={p.id}
                id={p.id}
                sendBasketTh={props.sendBasketTh}
                imgName={p.imgName}
                paintingName={p.paintingName}
                price={p.price}
                description={p.description}
                buttonState={p.buttonState}
                removeStatus={props.positiveStatus}
            />
        })
        }
    </div>
    )
}

export default Positive