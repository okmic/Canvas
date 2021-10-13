import React from 'react';
import './painting.css';

const PaintingDate = (props) => {
    return (
        <div className='contPainting'>
            <div className="boxPainting">
                <div className="painting">
                    <img src={props.imgName} alt={props.imgName} />
                </div>
                <div className="description">
                    <span>{props.description}</span>
                </div>
            </div>
        </div>
    )
}

export default PaintingDate