import React from 'react';
import './contentModule.css';

const ContentModule = (props) => {
    return (
        <div className="imgContent">
            <img src={props.imgName} alt={props.imgName} />
            <span>{props.description}</span>
        </div>
    )
}

export default ContentModule