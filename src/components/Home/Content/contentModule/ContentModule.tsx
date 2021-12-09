import React from 'react';
import './contentModule.css';

type PropsType = {
    imgName: string
    description: string
}

const ContentModule: React.FC<PropsType> = (props) => {

    return (
        <div className="imgContent">
            <img src={props.imgName} alt={props.imgName} />
            <span className="imgContent__span">{props.description}</span>
        </div>
    )
}

export default ContentModule