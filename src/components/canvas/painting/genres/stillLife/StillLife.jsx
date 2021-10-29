import React from "react";
import CanvasData from "../../accessories/CanvasData";


const StillLife = (props) => {
    return (
        <div className="this__garnes">
            {props.stillLife.map(p => {
                return <CanvasData
                    key={p.id}
                    id={p.id}
                    sendBasketTh={props.sendBasketTh}
                    imgName={p.imgName}
                    paintingName={p.paintingName}
                    price={p.price}
                    description={p.description}
                    buttonState={p.buttonState}
                    removeStatus={props.stillLifeStatus}
                />
            })
            }
        </div>
    )
}

export default StillLife