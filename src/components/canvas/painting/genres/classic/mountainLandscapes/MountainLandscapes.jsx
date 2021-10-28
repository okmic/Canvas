import React from "react";
import CanvasData from "../../../accessories/CanvasData";

const MountainLandscapes = (props) => {
    return (
        <>
            {props.mountainLandscapes.map(p => {
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
                    genres={props.mountainLandscapes.genres}
                    removeStatus={props.mountainStatus}
                />
            })
            }
        </>
    )
}

export default MountainLandscapes