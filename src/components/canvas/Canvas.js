import React from 'react';
import './canvas.css';
import PaintingDate from './painting/Painting';
import logo from '../img/logo.png';



const Paintings = (props) => {


    return (
        <div>
            <div className="logoCanvas">
                <img src={logo} alt={"Fine Art on Canvas"} />
            </div>
            <div className='contCanvas'>
                {props.paintingData.map(p => {
                        return <PaintingDate
                        key={p.id}
                        id={p.id}
                        sendBasketTh={props.sendBasketTh} 
                        imgName={p.imgName} 
                        paintingName={p.paintingName} 
                        price={p.price} 
                        description={p.description}
                        buttonState={p.buttonState}
                        buttonBasketAC={props.buttonBasketAC}
                        buttonBasketACUp={props.buttonBasketACUp}
                        />   
                })}
            </div>
        </div>
    )
}

export default Paintings