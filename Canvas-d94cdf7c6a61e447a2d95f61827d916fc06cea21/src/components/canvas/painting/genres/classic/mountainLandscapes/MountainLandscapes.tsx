import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../../../../common/Breadcrumbs/Breadcrumbs";
import PreloaderOut from "../../../../../common/Preloader/Preloader";
import { timeoutOne } from "../../../../../common/timeout";
import CanvasData from "../../../accessories/CanvasData";
import { PropsTypeMountain } from "./MountainContainer";

const MountainLandscapes: React.FC<PropsTypeMountain> = (props) => {

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
                    activeLink="Mountain Landscapes"
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