import React from "react";

import s from './Basket.module.css'
import Total from "./Total";




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
                : props.paintings.map(p =>
                    <div key={p.id} className={s.basket__item}>
                        <div className={s.item__box}>
                            <div className={s.image}>
                                <img src={p.imgName} alt={p.imgName} />
                            </div>
                            <div className={s.description}>
                                <span className={s.description__name}>{p.paintingName}</span>
                                <span>{p.price} &#8381; </span>
                            </div>
                        </div>
                        <div className={s.close}  >
                            <button onClick={() => onChangeStatus(p.id)}>&#10006;</button>
                        </div>
                    </div>
                )}
           { props.totalPrice > 0 &&
               <Total totalPrice={props.totalPrice} lengthPaint={props.paintings.length} removeOrderStatus={props.removeOrderStatus} order={props.order} />     
            }
        </div>
    )
}

export default Basket