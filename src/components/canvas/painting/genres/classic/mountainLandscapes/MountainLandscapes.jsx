import React from "react";
import CanvasData from "../../../accessories/CanvasData";

const MountainLandscapes = (props) => {
    return (
        <div className="this__garnes">
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
                    removeStatus={props.mountainStatus}
                />
            })
            }
        </div>
    )
}

export default MountainLandscapes