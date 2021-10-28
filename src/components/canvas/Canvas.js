import React from 'react';
import './canvas.css';
import logo from '../img/logok.jpg';
import GenresContainer from './painting/genres/GenresContainer';



const Paintings = (props) => {
    return (
        <div className="canvas__container_index">
            <div className="logoCanvas">
                <img src={logo} alt={"Fine Art on Canvas"} />
            </div>
            <div className='contCanvas'>
                <GenresContainer />
            </div>
        </div>
    )
}

export default Paintings