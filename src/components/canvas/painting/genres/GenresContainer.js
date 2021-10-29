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
                        <p>Пейзажи</p>
                    </div>
                    <div className="landscapes">
                    </div>
                    </NavLink>
                </div>
                <div className="gernes_item">
                    <NavLink to='/Gallary/Mountain-landscapes' >
                    <div className="genres__link">
                        <p>Горные пейзажи</p>
                    </div>
                    <div className="mountain">
                    </div>
                    </NavLink>
                </div>
                <div className="gernes_item">
                    <NavLink to='/Gallary/Seascapes' >
                    <div className="genres__link" >
                        <p>Морские пейзажи</p>
                    </div>
                    <div className="seascapes">
                    </div>
                    </NavLink>
                </div>
                <div className="gernes_item">
                    <NavLink to='/Gallary/Still-life'>
                        <div className="genres__link">
                            <p>Натюрморты</p>
                        </div>
                        <div className="stillLife">
                        </div>
                    </NavLink>
                </div>
                <div className="gernes_item">
                    <NavLink to='/Gallary/Positive'>
                        <div className="genres__link"  >
                            <p>Позитив</p>
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