import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../../../../common/Breadcrumbs/Breadcrumbs";
import Preloader from "../../../../../common/Preloader/Preloader";
import CanvasData from "../../../accessories/CanvasData";


const Seascapes = (props) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [props.seascapes])

    return (
        loading ? <Preloader />
            : <div className="this__garnes">
                <Breadcrumbs
                    linkOne="Главная"
                    linkTwo="Галерея"
                    activeLink="Морские пейзажи"
                />
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
                        removeStatus={props.seascapesStatus}
                    />
                })
                }
            </div>
    )
}

export default Seascapes