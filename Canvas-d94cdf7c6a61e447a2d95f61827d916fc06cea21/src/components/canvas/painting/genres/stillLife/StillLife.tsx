import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../../../common/Breadcrumbs/Breadcrumbs";
import PreloaderOut from "../../../../common/Preloader/Preloader";
import { timeoutOne } from "../../../../common/timeout";
import CanvasData from "../../accessories/CanvasData";
import { PropsTypeStillLife } from "./StillLifeContainer";


const StillLife: React.FC<PropsTypeStillLife> = (props) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        timeoutOne(setLoading, 1150)
    }, [])

    return (
        <div>
            <PreloaderOut preloaderStatus={loading} />
            <div className="this__garnes">
                <Breadcrumbs
                    linkOne="Main"
                    linkTwo="Gallery"
                    activeLink="Still Life"
                />
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
                        linkOne="Главная"
                        linkTwo="Галерея"
                        activeLink="Натюрморты"
                    />
                })
                }
            </div>
        </div>
    )
}

export default StillLife