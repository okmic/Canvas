import React, {  useEffect, useState } from 'react';
import './canvas.css';
import logo from '../img/logok.jpg';
import PreloaderOut from '../common/Preloader/Preloader';
import ScrollToTop from '../../ScrollToTop/ScrollToTop';
import { timeoutOne } from '../common/timeout';
import Landscapes from './Landscapes';
import { CanvasPropsType } from './CanvasContainer';



const Canvas: React.FC<CanvasPropsType> = (props) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        timeoutOne(setLoading, 900)
    }, [loading])

    return (
        <div className="canvas__container_index">
            <ScrollToTop />
                <PreloaderOut preloaderStatus={loading} />
            <div className="container__canvas_content">
                <div className="logoCanvas">
                    <img src={logo} alt={"Fine Art on Canvas"} />
                </div>
                <div className='contCanvas'>
                    <Landscapes 
                    paintings={props.paintings}
                    genres={props.genres}
                    sendBasketTh={props.sendBasketTh}
                    updateButtonStatus={props.updateButtonStatus}
                    moreOrLess={props.moreOrLess}
                    genresFilter={props.genresFilter}
                    removeFilters={props.removeFilters}
                    />
                    {/* <GenresContainer /> */}
                </div>
            </div>
        </div>
    )
}

export default Canvas