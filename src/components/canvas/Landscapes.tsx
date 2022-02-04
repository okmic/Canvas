import React, { useEffect, useState } from "react";
import CanvasData from "./painting/accessories/CanvasData";
import { timeoutOne } from "../common/timeout";
import PreloaderOut from "../common/Preloader/Preloader";
import './Genres.css'
import { MdOutlineExpandMore, MdOutlineExpandLess, MdOutlineRemoveCircle } from 'react-icons/md'
import { CanvasPropsType } from "./CanvasContainer";



const Landscapes: React.FC<CanvasPropsType> = (props) => {

    const [data, setData] = useState(props.paintings)
    const [loading, setLoading] = useState(true)

    const handleMoreOrLess = (order: string) => {
        props.moreOrLess(order as 'more' | 'less')
        setData([])
        setLoading(true)
    }

    const handleRemoveFilters = () => {
        props.removeFilters()
        setData([])
        setLoading(true)
    }


    const Genres = (id: number) => {
        props.genresFilter(id)
        setData([])
        setLoading(true)
    }

    useEffect(() => {
        timeoutOne(setLoading, 1150)
        setData(props.paintings)
    }, [data, props.paintings])

    return (
        <div>
            <PreloaderOut preloaderStatus={loading} />

            <div className="genresBox">
                {props.genres.map(g =>
                    <div key={g.id} className="gernes_item" onClick={() => Genres(g.id)}>
                        <div className="genres__link_container">
                            <div className="genres__link" >
                                <p>{g.title}</p>
                            </div>
                            <div className="genres__img">
                                <img src={g.imgName} alt={g.imgName} />
                            </div>
                        </div>
                    </div>)}
            </div>
            <div className="filters">
                <button className="button" onClick={handleRemoveFilters}>Remove sort <MdOutlineRemoveCircle /></button>
                <button className="button" onClick={() => handleMoreOrLess('more')}>Sort by price ascending <MdOutlineExpandMore /></button>
                <button className="button" onClick={() => handleMoreOrLess('less')}>Sort by price descending <MdOutlineExpandLess /></button>
            </div>

            <div className="this__garnes">
                {data.map(p => {
                    return <CanvasData
                        key={p.id}
                        id={p.id}
                        sendBasketTh={props.sendBasketTh}
                        imgName={p.imgName}
                        paintingName={p.paintingName}
                        price={p.price}
                        description={p.description}
                        buttonState={p.buttonState}
                        updateButtonStatus={props.updateButtonStatus}
                    />
                })
                }
            </div>
        </div>
    )
}

export default Landscapes