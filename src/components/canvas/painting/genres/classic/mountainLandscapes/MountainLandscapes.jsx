import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../../../../common/Breadcrumbs/Breadcrumbs";
import PreloaderIn from "../../../../../common/Preloader/inPreloader";
import CanvasData from "../../../accessories/CanvasData";

const MountainLandscapes = (props) => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1150)
    }, [props.mountainLandscapes])

    return (
        <div>
            <PreloaderIn preloaderStatus={loading} />
            <div className="this__garnes">
                <Breadcrumbs
                    linkOne="Главная"
                    linkTwo="Галерея"
                    activeLink="Горные пейзажи"
                />
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
        </div>
    )
}

export default MountainLandscapes