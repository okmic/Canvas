import React from 'react';
import './canvas.css';
import PaintingDate from './painting/Painting';
import logo from '../img/logo.png';
import vlesu from '../img/canvas/1.jpg';
import cveti from '../img/canvas/2.jpg';
import z from '../img/canvas/3.jpg';
import zz from '../img/canvas/4.jpg';
import zzz from '../img/canvas/5.jpg';
import zzzz from '../img/canvas/6.jpg';
import q from '../img/canvas/7.jpg';
import qq from '../img/canvas/8.jpg';
import qqq from '../img/canvas/9.jpg';
import w from '../img/canvas/10.jpg';
import ww from '../img/canvas/11.jpg';
import www from '../img/canvas/12.jpg';
import e from '../img/canvas/13.jpg';
import ee from '../img/canvas/14.jpg';
import eee from '../img/canvas/15.jpg';

const Paintings = (props) => {
    return (
        <div>
        <div className="logoCanvas">
        <img src={logo} alt={"Art Fine on Canvas"} />
        </div>
        <div className='contCanvas'> 
        <PaintingDate imgName={vlesu} description="В лесу"/>
        <PaintingDate imgName={cveti} description="Подсолнухи"/>
        <PaintingDate imgName={z} description="Картина"/>
        <PaintingDate imgName={zz} description="Картина"/>
        <PaintingDate imgName={zzz} description="Картина"/>
        <PaintingDate imgName={zzzz} description="Картина"/>
        <PaintingDate imgName={q} description="Картина"/>
        <PaintingDate imgName={qq} description="Картина"/>
        <PaintingDate imgName={qqq} description="Картина"/>
        <PaintingDate imgName={w} description="Картина"/>
        <PaintingDate imgName={ww} description="Картина"/>
        <PaintingDate imgName={www} description="Картина"/>
        <PaintingDate imgName={e} description="Картина"/>
        <PaintingDate imgName={ee} description="Картина"/>
        <PaintingDate imgName={eee} description="Картина"/>
        <PaintingDate imgName={zz} description="Картина"/>
        <PaintingDate imgName={zzz} description="Картина"/>
        <PaintingDate imgName={zzzz} description="Картина"/>
        </div>  
        </div>
    )
}

export default Paintings