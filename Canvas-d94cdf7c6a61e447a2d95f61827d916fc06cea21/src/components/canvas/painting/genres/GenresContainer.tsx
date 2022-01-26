import React, { Suspense } from 'react';
import './Genres.css'
import { NavLink } from 'react-router-dom';
import PreloaderContainer from '../../../common/Preloader/Preloader';
import { GenresType } from '../../../../redux/canvasData';

type PropsType = {
    genres: Array<GenresType>
}

const GenresContainer: React.FC<PropsType> = (props) => {
    return (
        <Suspense fallback={PreloaderContainer}>
            <div className="genresBox">
                {props.genres.map(g => 
                <div key={g.id} className="gernes_item">
                    <NavLink className="genres__link_container" to={g.url} >
                    <div className="genres__link" >
                        <p>{g.title}</p>
                    </div>
                    <div className="genres__img">
                        <img src={g.imgName} alt={g.imgName} />
                    </div>
                    </NavLink>
                </div>
                )
                }

            </div>

        </Suspense>
    )
}

export default GenresContainer