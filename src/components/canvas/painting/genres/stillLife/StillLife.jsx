import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../../../common/Breadcrumbs/Breadcrumbs";
import Preloader from "../../../../common/Preloader/Preloader";
import CanvasData from "../../accessories/CanvasData";


const StillLife = (props) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [props.stillLife])

    return (
        loading ? <Preloader />
            : <div className="this__garnes">
                <Breadcrumbs
                    linkOne="Главная"
                    linkTwo="Галерея"
                    activeLink="Натюрморты"
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
    )
}

export default StillLife