import React, { Suspense } from 'react';
import './Genres.css'
import { NavLink } from 'react-router-dom';
import PreloaderContainer from '../../../common/Preloader/PreloaderContainer';


const GenresContainer = (props) => {
    return (
        <Suspense fallback={PreloaderContainer}>
            <div className="genresBox">
                <div className="gernes_item">
                    <NavLink to='/Gallary/Landscapes' >
                    <div className="genres__link" >
                        <b>Пейзажи</b>
                    </div>
                    <div className="landscapes">
                    </div>
                    </NavLink>
                </div>
                <div className="gernes_item">
                    <NavLink to='/Gallary/Mountain-landscapes' >
                    <div className="genres__link">
                        <b>Горные пейзажи</b>
                    </div>
                    <div className="mountain">
                    </div>
                    </NavLink>
                </div>
                <div className="gernes_item">
                    <NavLink to='/Gallary/Seascapes' >
                    <div className="genres__link" >
                        <b>Морские пейзажи</b>
                    </div>
                    <div className="seascapes">
                    </div>
                    </NavLink>
                </div>
                <div className="gernes_item">
                    <NavLink to='/Gallary/Still-life'>
                        <div className="genres__link">
                            <b>Натюрморты</b>
                        </div>
                        <div className="stillLife">
                        </div>
                    </NavLink>
                </div>
                <div className="gernes_item">
                    <NavLink to='/Gallary/Positive'>
                        <div className="genres__link"  >
                            <b>Позитив</b>
                        </div>
                        <div className="positive">
                        </div>
                    </NavLink>
                </div>
            </div>

        </Suspense>
    )
}

export default GenresContainer