import React from "react";
import CanvasData from "../../accessories/CanvasData";


const StillLife = (props) => {
    return (
        <>
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
                    buttonBasketAC={props.buttonBasketAC}
                    buttonBasketACUp={props.buttonBasketACUp}
                    genres={props.stillLife.genres}
                    removeStatus={props.stillLifeStatus}
                />
            })
            }
        </>
    )
}

export default StillLife