import React from "react";
import { GiBasket } from "react-icons/gi";
import s from './Basket.module.css'
import Total from "./Total";
import { RiGalleryLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { PaitingsType } from "../../redux/canvasData";

type PropsType = {
    totalPrice: number
    lengthPaint: number
    updateButtonStatus: (id: number) => void
    removeItem: (id: number) => void
    removeOrderStatus: () => void
    paintings: Array<PaitingsType>
    order: boolean
}

let Basket: React.FC<PropsType> = (props) => {

    
    let onChangeStatus = (id: number) => {
        props.removeItem(id)
        props.updateButtonStatus(id)
    }
    
    return (
        <div className={s.basket__container}>
            {props.paintings.length < 1
                ? <div className={s.basket_null_container} >
                    <div className={s.basket_null}>
                        <div className={s.basket_null + " " + s.null_description}>
                            <GiBasket size="50" />
                            <h3>There is nothing in your cart yet.</h3>
                        </div>
                        <button className={s.button + " " + s.button_translete} >
                            <NavLink to="/Gallery" className={s.button_null} >
                                <RiGalleryLine size="30" />
                                <span>&larr;</span>
                                <span>To the gallery</span>
                            </NavLink>
                        </button>
                    </div>
                </div>
                : props.paintings.map((p, index) =>
                    <div key={p.id} className={s.basket__item}>
                        <div className={s.item__box}>
                            <div className={s.image}>
                                <img src={p.imgName} alt={p.imgName} />
                            </div>
                            <div className={s.description}>
                                <span className={s.description__name}>{p.paintingName}</span>
                                <span>{p.price} $ </span>
                            </div>
                        </div>
                        <div className={s.close}  >
                            <button className="button" onClick={() => onChangeStatus(p.id)}>&#10006;</button>
                        </div>
                    </div>
                )}
            {props.totalPrice > 0 &&
                <Total totalPrice={props.totalPrice} lengthPaint={props.paintings.length} removeOrderStatus={props.removeOrderStatus} order={props.order} />
            }
        </div>
    )
}

export default Basket