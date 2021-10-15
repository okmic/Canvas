import React, { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './painting.css';
import Aos from 'aos'
import 'aos/dist/aos.css'

const PaintingDate = (props) => {
    useEffect(()=>{
        Aos.init({
            duration: 1000
        })
    }, [])
    return (
        <div  className='contPainting'>
            <div className="boxPainting">
                <div   className="painting" data-aos="flip-left">
                    <LazyLoadImage src={props.imgName} alt={props.imgName} effect="blur" />
                </div>
                <div className="description">
                    <span>{props.description}</span>
                </div>
            </div>
        </div>
    )
}

export default PaintingDate