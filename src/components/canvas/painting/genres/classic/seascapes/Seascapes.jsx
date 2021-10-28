import React from "react";
import CanvasData from "../../../accessories/CanvasData";


const Seascapes = (props) => {
    return (
        <>
            {props.seascapes.map(p => {
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
                    genres={props.seascapes.genres}
                    removeStatus={props.seascapesStatus}
                />
            })
            }
        </>
    )
}

export default Seascapes