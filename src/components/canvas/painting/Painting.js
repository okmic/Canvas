import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Modal from '../../common/Modal/Modal';
import Accordion from './Accordion/Accordion';
import './painting.css';
import { GiBasket } from "react-icons/gi";


const PaintingDate = (props) => {

    const [modal, setModal] = useState(false)
    const addingPaitingInBasket = (imgName) => {
        return(
            props.sendBasket(imgName)
        )
    }
    return (
   <div  className='contPainting'>
            <div className="boxPainting">
                <div   className="painting">
                    <LazyLoadImage onClick={() => setModal(true)} src={props.imgName} alt={props.imgName} effect="blur" />
                    <div className="basket__gallary">
                        <button onClick={()=> addingPaitingInBasket(props.imgName)}>Добавить в <GiBasket size={19} /></button>
                                </div>
                </div>
                <div className="description">
                    <ul className="description__ul">
                        <li> </li><br/>
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