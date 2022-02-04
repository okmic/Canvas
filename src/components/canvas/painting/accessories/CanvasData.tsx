import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { PaitingsType } from "../../../../redux/canvasData";
import Modal from "../../../common/Modal/Modal";
import Accordion from "./Accordion/Accordion";
import ButtonGallary from "./ButtonGallary";

type PropsType = {
    linkOne?: string
    linkTwo?: string
    activeLink?: string
    sendBasketTh: (id: number, imgName: string, paintingName: string, price: number) => void 
    updateButtonStatus: (id: number) => void
}

const CanvasData: React.FC<PropsType & PaitingsType> = (props) => {
    const [modal, setModal] = useState(false)
    const [buttonBasket] = useState<boolean>(true)

    return (
        <div className='contPainting'>
            <div className="boxPainting">
                <div className="items__painting">
                    <div className="painting">
                        <LazyLoadImage onClick={() => setModal(true)} src={props.imgName} alt={props.imgName} effect="blur" />
                    </div> 
                </div>
                <div className="description">
                    <ul className="description__ul">
                                <Accordion 
                                id={props.id}  
                                paintingName={props.paintingName} 
                                price={props.price} 
                                description={props.description} 
                                />
                    </ul>
                    <ButtonGallary 
                    id={props.id} 
                    removeStatus={props.updateButtonStatus} 
                    buttonBasket={buttonBasket} 
                    sendBasketTh={props.sendBasketTh} 
                    buttonState={props.buttonState} 
                    imgName={props.imgName} 
                    paintingName={props.paintingName} 
                    price={props.price} />
                </div>
                <Modal active={modal} setActive={setModal}>
                    <img src={props.imgName} alt={props.imgName} />
                </Modal>
            </div>
        </div>
    )
}

export default CanvasData