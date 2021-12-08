import React, { useState } from "react";
import { GiBasket } from "react-icons/gi";
import s from './Basket.module.css'
import Total from "./Total";
import { RiGalleryLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import Modal from "../common/Modal/Modal";
import { PaitingsType } from "../../redux/canvasData";

type PropsType = {
    totalPrice: number
    lengthPaint: number
    landscapesStatus: (id: number) => void
    mountainStatus: (id: number) => void
    seascapesStatus: (id: number) => void
    stillLifeStatus: (id: number) => void
    positiveStatus: (id: number) => void
    removeItem: (id: number) => void
    removeOrderStatus: () => void
    paintings: Array<PaitingsType>
    order: boolean
}

let Basket: React.FC<PropsType> = (props) => {

    const [modal, setModal] = useState(false)
    
    let onChangeStatus = (id: number) => {
            if (id > 100 && id < 200) {
                props.landscapesStatus(id)
            }   
            else if(id > 200 && id < 300) {
                props.mountainStatus(id)
            }   
            else if(id > 300 && id < 400) {
                props.seascapesStatus(id)
            }   
            else if(id > 400 && id < 500) {
                props.stillLifeStatus(id)
            }  
            else if(id > 500) {
                props.positiveStatus(id)
            }
        return props.removeItem(id)

    }
    return (
        <div className={s.basket__container}>
            {props.paintings.length < 1
                ? <div className={s.basket_null_container} >
                    <div className={s.basket_null}>
                        <div className={s.basket_null + " " + s.null_description}>
                            <GiBasket size="50" />
                            <h3>В вашей корзине пока ничего нет</h3>
                        </div>
                        <button className={s.button + " " + s.button_translete} >
                            <NavLink to="/Gallery" className={s.button_null} >
                                <RiGalleryLine size="30" />
                                <span>&&larr;</span>
                                <span>В галерею</span>
                            </NavLink>
                        </button>
                    </div>
                </div>
                : props.paintings.map(p =>
                    <div key={p.id} className={s.basket__item}>
                        <div className={s.item__box}>
                            <div className={s.image} onClick={() => setModal(true)}>
                                <img src={p.imgName} alt={p.imgName} />
                            </div>
                            <div className={s.description}>
                                <span className={s.description__name}>{p.paintingName}</span>
                                <span>{p.price} &&#8381; </span>
                            </div>
                        </div>
                        <div className={s.close}  >
                            <button className="button" onClick={() => onChangeStatus(p.id)}>&&#10006;</button>
                        </div>
                        <Modal active={modal} setActive={setModal}>
                             <img src={p.imgName} alt={p.imgName} />
                        </Modal>
                    </div>
                )}
            {props.totalPrice > 0 &&
                <Total totalPrice={props.totalPrice} lengthPaint={props.paintings.length} removeOrderStatus={props.removeOrderStatus} order={props.order} />
            }
        </div>
    )
}

export default Basket