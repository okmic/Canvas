import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Modal from "../../../common/Modal/Modal";
import Accordion from "./Accordion/Accordion";
import ButtonGallary from "./ButtonGallary";


const CanvasData = (props) => {
    const [modal, setModal] = useState(false)
    const [buttonBasket] = useState(true)
    
    return (
        <div className='contPainting'>
            <div className="boxPainting">
                <div className="items__painting">
                    <div className="painting">
                        <LazyLoadImage onClick={() => setModal(true)} src={props.imgName} alt={props.imgName} effect="blur" />
                    </div> 
                    <ButtonGallary id={props.id} removeStatus={props.removeStatus} buttonBasket={buttonBasket} sendBasketTh={props.sendBasketTh} buttonState={props.buttonState} imgName={props.imgName} paintingName={props.paintingName} price={props.price} />
                </div>
                <div className="description">
                    <ul className="description__ul">
                                <Accordion id={props.id}  paintingName={props.paintingName} price={props.price} description={props.description} />
                    </ul>
                </div>
                <Modal active={modal} setActive={setModal}>
                    <img src={props.imgName} alt={props.imgName} />
                </Modal>
            </div>
        </div>
    )
}

export default CanvasData