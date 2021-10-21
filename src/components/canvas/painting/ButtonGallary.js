import React from 'react';
import './painting.css';
import { GiBasket } from "react-icons/gi";
import { AiOutlineCheckCircle } from "react-icons/ai";


const ButtonGallary = (props) => {

    const addingPaitingInBasket = (id, imgName, paintingName, price) => {
        return (
        props.sendBasketTh(id, imgName, paintingName, price),
        props.buttonBasketAC(id)
        )
    }

    return (

        props.buttonState
            ? <div className="basket__gallary">
            <span className="button" onClick={() => props.buttonBasket && addingPaitingInBasket(props.id,  props.imgName, props.paintingName, props.price)}>
                <b> Добавить в <GiBasket size={19} /> </b>
            </span>
            </div> 

            : <div className={!props.buttonBasket ? "basket__gallaryAnimate" : "basket__gallaryAnimate"  }>
            <span className={props.classes__span} >
                <b><AiOutlineCheckCircle color='green' /> </b>
            </span>
        </div>


    )
}

export default ButtonGallary