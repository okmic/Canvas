import React, { useEffect, useState } from "react";
import PreloaderIn from "../../../../../common/Preloader/inPreloader";
import CanvasData from "../../../accessories/CanvasData";
import Breadcrumbs from '../../../../../common/Breadcrumbs/Breadcrumbs'
import { PropsTypeLandscapes } from "./LandscapesContainer";

const Landscapes: React.FC<PropsTypeLandscapes> = (props) => {

    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        setTimeout(() => {
            setLoading(false)
        }, 1150)
    }, [props.landscapes])

    return (
        <div>
        <PreloaderIn preloaderStatus={loading} />
        <div className="this__garnes">
        <Breadcrumbs 
        linkOne="Главная"
        linkTwo="Галерея"
        activeLink="Пейзажи"
            />
            {props.landscapes.map(p => {
                return <CanvasData
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
        </div>
    )
}

export default Landscapes