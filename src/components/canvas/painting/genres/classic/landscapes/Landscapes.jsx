import React, { useEffect, useState } from "react";
import Preloader from "../../../../../common/Preloader/Preloader";
import CanvasData from "../../../accessories/CanvasData";
import Breadcrumbs from '../../../../../common/Breadcrumbs/Breadcrumbs'

const Landscapes = (props) => {

    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [props.landscapes])

    return (
        loading ? <Preloader />
        : <div className="this__garnes">
            <Breadcrumbs 
        linkOne="Главная"
        linkTwo="Галерея"
        activeLink="Пейзажи"
            />
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
                    removeStatus={props.landscapesStatus}
                />
            })
            }

        </div>
    )
}

export default Landscapes