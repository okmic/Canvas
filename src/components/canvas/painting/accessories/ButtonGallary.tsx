import React from 'react';
import './../painting.css';
import { GiBasket } from "react-icons/gi";
import { AiOutlineCheckCircle } from "react-icons/ai";

type PropsType = {
    buttonBasket: boolean
    classes__span?: string
    id: number
    buttonState: boolean
    imgName: string
    paintingName: string
    price: number
    sendBasketTh: (id: number, imgName: string, paintingName: string, price: number) => void 
    removeStatus: (id: number) => void
}

const ButtonGallary: React.FC<PropsType> = (props) => {

    const addingPaitingInBasket = (id: number, imgName: string, paintingName: string, price: number) => {
        return (
        props.sendBasketTh(id, imgName, paintingName, price),
        props.removeStatus(id)
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