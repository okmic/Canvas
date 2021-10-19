import React from "react";

import s from './Basket.module.css'

let Basket = (props) => {

    return(
        props.paintings.length < 1
        ? <div>В вашей карзине ничего нет...</div> 
        : <div className={s.basket__container}>
            {props.paintings.map( p => 
            <img key={p.imgName}
            src={p.imgName} alt={p.imgName} />
            )}
        </div>
    )
} 

export default Basket