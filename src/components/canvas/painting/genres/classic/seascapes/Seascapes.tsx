import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../../../../common/Breadcrumbs/Breadcrumbs";
import PreloaderOut from "../../../../../common/Preloader/Preloader";
import { timeoutOne } from "../../../../../common/timeout";
import CanvasData from "../../../accessories/CanvasData";
import { PropsTypeSeascapes } from "./SeascapesContainer";


const Seascapes: React.FC<PropsTypeSeascapes> = (props) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        timeoutOne(setLoading, 1150)
    }, [props.seascapes])

    return (
        <div>
            <PreloaderOut preloaderStatus={loading} />
            <div className="this__garnes">
            <Breadcrumbs
                    linkOne="Main"
                    linkTwo="Gallery"
                    activeLink="Seascapes"
                />
                {props.seascapes.map(p => {
                    return <CanvasData
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
        </div>
    )
}

export default Seascapes