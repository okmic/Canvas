import React, { useEffect, useState } from 'react';
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
import PreloaderContainer from '../common/Preloader/PreloaderContainer';


/* const logo = lazy(() => import('../img/logo.png')) */

const Paintings = (props) => {
    const [loading, setLoading] = useState(undefined)
    const [completed, setCompleted] = useState(undefined)

    useEffect(() => {
    setTimeout(
        () => {
            setLoading(true)
            setTimeout(
                () => {
                   setCompleted(true)
                }, 1000)
        }, 1500)
}, [loading])

    return (
/*         !completed ? <PreloaderContainer />
        : */<div>
        
        <div className="logoCanvas">
        <img src={logo} alt={"Fine Art on Canvas"} />
        </div>
        
         <div className='contCanvas'> 
        <PaintingDate imgName={vlesu} paintingName="В лесу" price="8 000"  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam accusamus nobis possimus? Explicabo, ex quis unde sint atque quam animi distinctio officiis, laborum vero et iste cupiditate perferendis! Obcaecati."  />
        <PaintingDate imgName={cveti} paintingName="Подсолнухи" price="7 000"  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam accusamus nobis possimus? Explicabo, ex quis unde sint atque quam animi distinctio officiis, laborum vero et iste cupiditate perferendis! Obcaecati."  />
        <PaintingDate imgName={z} paintingName="Цветы" price="5 000"  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam accusamus nobis possimus? Explicabo, ex quis unde sint atque quam animi distinctio officiis, laborum vero et iste cupiditate perferendis! Obcaecati."  />
        <PaintingDate imgName={zz} paintingName="Побережье" price="6 000"  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam accusamus nobis possimus? Explicabo, ex quis unde sint atque quam animi distinctio officiis, laborum vero et iste cupiditate perferendis! Obcaecati."  />
        <PaintingDate imgName={zzz} paintingName="Натюрморт" price="7 000"  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam accusamus nobis possimus? Explicabo, ex quis unde sint atque quam animi distinctio officiis, laborum vero et iste cupiditate perferendis! Obcaecati."  />
        <PaintingDate imgName={zzzz} paintingName="Цветы" price="7 000"  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam accusamus nobis possimus? Explicabo, ex quis unde sint atque quam animi distinctio officiis, laborum vero et iste cupiditate perferendis! Obcaecati."  />
        <PaintingDate imgName={q} paintingName="Дубы Петра Великого" price="30 000"  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam accusamus nobis possimus? Explicabo, ex quis unde sint atque quam animi distinctio officiis, laborum vero et iste cupiditate perferendis! Obcaecati."  />
        <PaintingDate imgName={qq} paintingName="Амега" price="3 000"  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam accusamus nobis possimus? Explicabo, ex quis unde sint atque quam animi distinctio officiis, laborum vero et iste cupiditate perferendis! Obcaecati."  />
        <PaintingDate imgName={qqq} paintingName="Горный пейзаж" price="11 000"  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam accusamus nobis possimus? Explicabo, ex quis unde sint atque quam animi distinctio officiis, laborum vero et iste cupiditate perferendis! Obcaecati."  />
        <PaintingDate imgName={w} paintingName="К свету" price="7 000"  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam accusamus nobis possimus? Explicabo, ex quis unde sint atque quam animi distinctio officiis, laborum vero et iste cupiditate perferendis! Obcaecati."  />
        <PaintingDate imgName={ww} paintingName="Маки" price="9 000"  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam accusamus nobis possimus? Explicabo, ex quis unde sint atque quam animi distinctio officiis, laborum vero et iste cupiditate perferendis! Obcaecati."  />
        <PaintingDate imgName={www} paintingName="Рыжие коты" price="5 000"  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam accusamus nobis possimus? Explicabo, ex quis unde sint atque quam animi distinctio officiis, laborum vero et iste cupiditate perferendis! Obcaecati."  />
        <PaintingDate imgName={e} paintingName="Побережье" price="9 000"  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam accusamus nobis possimus? Explicabo, ex quis unde sint atque quam animi distinctio officiis, laborum vero et iste cupiditate perferendis! Obcaecati."  />
        <PaintingDate imgName={ee} paintingName="Рыжий кот" price="5 000"  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam accusamus nobis possimus? Explicabo, ex quis unde sint atque quam animi distinctio officiis, laborum vero et iste cupiditate perferendis! Obcaecati."  />
        <PaintingDate imgName={eee} paintingName="Романтическая компазиция" price="15 000"  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam accusamus nobis possimus? Explicabo, ex quis unde sint atque quam animi distinctio officiis, laborum vero et iste cupiditate perferendis! Obcaecati."  />
        <PaintingDate imgName={zz} paintingName="Побережье" price="7 000"  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam accusamus nobis possimus? Explicabo, ex quis unde sint atque quam animi distinctio officiis, laborum vero et iste cupiditate perferendis! Obcaecati."  />
        <PaintingDate imgName={zzz} paintingName="Цветы" price="7 000"  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam accusamus nobis possimus? Explicabo, ex quis unde sint atque quam animi distinctio officiis, laborum vero et iste cupiditate perferendis! Obcaecati."  />
        <PaintingDate imgName={zzzz} paintingName="Натюрморт" price="7 000"  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam accusamus nobis possimus? Explicabo, ex quis unde sint atque quam animi distinctio officiis, laborum vero et iste cupiditate perferendis! Obcaecati."  />
        </div> 
        </div>
    )
}

export default Paintings