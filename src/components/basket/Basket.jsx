import React from "react";

import s from './Basket.module.css'




let Basket = (props) => {
    
    let onChangeStatus = (id) => {
       return (
       props.removeItem(id),
       props.buttonBasketACUp(id)
       )
    } 

    return (
        <div className={s.basket__container}>
            {props.paintings.length < 1
                ? <div>В вашей карзине ничего нет...</div>
                : props.paintings.map(p => <div key={p.imgName} className={s.basket__item}>
                            <div className={s.image}>
                            <img src={p.imgName} alt={p.imgName} />
                        </div>
                        <div className={s.description}>
                            <span className={s.description__name}>{p.paintingName}</span>
                            <span>{p.price} &#8381; </span>
                        </div>
                        <div className={s.close}  >
                            <button onClick={() => onChangeStatus(p.id) }>&#10006;</button>
                        </div>
                    </div>
                    )}
            <span>{props.totalPrice}</span>
        </div>
    )
}

export default Basket