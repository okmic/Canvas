import React, { useEffect, useState } from "react"
import Breadcrumbs from "../../../../common/Breadcrumbs/Breadcrumbs"
import Preloader from "../../../../common/Preloader/Preloader"
import CanvasData from "../../accessories/CanvasData"


const Positive = (props) => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [props.positive])

    return (
        loading ? <Preloader />
            : <div className="this__garnes">
                <Breadcrumbs
                    linkOne="Главная"
                    linkTwo="Галерея"
                    activeLink="Позитив"
                />
                {props.positive.map(p => {
                    return <CanvasData
                        key={p.id}
                        id={p.id}
                        sendBasketTh={props.sendBasketTh}
                        imgName={p.imgName}
                        paintingName={p.paintingName}
                        price={p.price}
                        description={p.description}
                        buttonState={p.buttonState}
                        removeStatus={props.positiveStatus}

                    />
                })
                }
            </div>
    )
}

export default Positive