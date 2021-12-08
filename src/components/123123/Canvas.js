import React, { useEffect, useState } from 'react';
import './canvas.css';
import logo from '../img/logok.jpg';
import GenresContainer from './painting/genres/GenresContainer';

import PreloaderOut from '../common/Preloader/Preloader';
import ScrollToTop from '../../ScrollToTop/ScrollToTop';



const Paintings = (props) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 900)
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
                    <GenresContainer genres={props.genres} />
                </div>
            </div>
        </div>
    )
}

export default Paintings