import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Modal from '../../common/Modal/Modal';
import Accordion from './Accordion/Accordion';
import ButtonGallary from './ButtonGallary';
import './painting.css';


const PaintingDate = (props) => {

    const [modal, setModal] = useState(false)
    const [buttonBasket, setButtonBasket] = useState(true)

    const addingPaitingInBasket = (imgName) => {
        return (
            props.sendBasket(imgName),
            setButtonBasket(false)
        )
    }
    return (
        <div className='contPainting'>
            <div className="boxPainting">
                <div className="items__painting">
                    <div className="painting">
                        <LazyLoadImage onClick={() => setModal(true)} src={props.imgName} alt={props.imgName} effect="blur" />
                    </div> 
                    <ButtonGallary buttonBasket={buttonBasket} addingPaitingInBasket={addingPaitingInBasket} />
                </div>
                <div className="description">
                    <ul className="description__ul">
                        <li> </li><br />
                        <Accordion paintingName={props.paintingName} price={props.price} description={props.description} />
                    </ul>
                </div>
                <Modal active={modal} setActive={setModal}>
                    <img src={props.imgName} alt={props.imgName} />
                </Modal>
            </div>
        </div>
    )
}

export default PaintingDate