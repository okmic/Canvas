import React from "react";
import CanvasData from "../../../accessories/CanvasData";


const Landscapes = (props) => {

    return (
        <>
            {props.landscapes.map(p => {
                return <CanvasData
                    key={p.id}
                    id={p.id}
                    sendBasketTh={props.sendBasketTh}
                    imgName={p.imgName}
                    paintingName={p.paintingName}
                    price={p.price}
                    description={p.description}
                    buttonState={p.buttonState}
/*                     buttonBasketAC={props.buttonBasketAC}
                    buttonBasketACUp={props.buttonBasketACUp} */
/*                     genres={props.landscapes.genres} */
                    removeStatus={props.landscapesStatus}
                />
            })
            }
        </>
    )
}

export default Landscapes