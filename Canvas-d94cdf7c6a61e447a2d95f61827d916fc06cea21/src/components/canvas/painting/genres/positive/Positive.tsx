import React, { useEffect, useState } from "react"
import Breadcrumbs from "../../../../common/Breadcrumbs/Breadcrumbs"
import PreloaderOut from "../../../../common/Preloader/Preloader"
import { timeoutOne } from "../../../../common/timeout"
import CanvasData from "../../accessories/CanvasData"
import { PropsTypePositive } from "./PositiveContainer"



const Positive: React.FC<PropsTypePositive> = (props) => {

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
                    activeLink="Positive"
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
        </div>
    )
}

export default Positive