import React from 'react';
import './painting.css';
import { GiBasket } from "react-icons/gi";
import { AiOutlineCheckCircle } from "react-icons/ai";


const ButtonGallary = (props) => {


    return (

        props.buttonBasket
            ? <div className="basket__gallary">
                <span className="button" onClick={() => props.buttonBasket && props.addingPaitingInBasket(props.imgName)}>
                    <b> Добавить в <GiBasket size={19} /> </b>
                </span>
            </div>

            : <div className={!props.buttonBasket ? "basket__gallaryAnimate" : "basket__gallaryAnimate"  }>
                <span className={props.classes__span} onClick={() => props.buttonBasket && props.addingPaitingInBasket(props.imgName)}>
                    <b><AiOutlineCheckCircle color='green' /> </b>
                </span>
            </div>
    )
}

export default ButtonGallary