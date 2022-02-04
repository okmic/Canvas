/* import React, { Suspense, useEffect, useState } from 'react';
import './Genres.css'
import { NavLink } from 'react-router-dom';
import PreloaderContainer from '../../../common/Preloader/Preloader';
import { GenresType, InitialStateType, PaitingsType } from '../../../../redux/canvasData';
import LandscapesContainer from './classic/landscapes/LandscapesContainer';
import { connect } from 'react-redux';
import { AppStateType } from '../../../../redux/store';
import { landscapesStatus, mountainStatus, positiveStatus, seascapesStatus, sendBasketTh, stillLifeStatus } from '../../../../redux/canvasReducer';
import Landscapes from './classic/landscapes/Landscapes';


export type GenresDataType = {
    paintings: Array<PaitingsType>
    sendBasketTh: (id: number, imgName: string, paintingName: string, price: number) => void 
    updateStatus: (id: number) => void
}

const GenresContainer: React.FC<PropsType & DispatchType> = (props) => {

    const [statusPaintings, setStatusPaintings] = useState(false)
    const [genresData, setGenresData] = useState<GenresDataType>({} as GenresDataType)
    const [type, setType] = useState('')

    let onChangeStatus = (id: number) => {
        if (id > 100 && id < 200) {
            props.landscapesStatus(id)
            setGenresData({ ...genresData,
                paintings: props.paintigns.landscapes,
                sendBasketTh: props.sendBasketTh,
                updateStatus: props.landscapesStatus
            })
        }   
        else if(id > 200 && id < 300) {
            props.mountainStatus(id)
        }   
        else if(id > 300 && id < 400) {
            props.seascapesStatus(id)
        }   
        else if(id > 400 && id < 500) {
            props.stillLifeStatus(id)
        }  
        else if(id > 500) {
            props.positiveStatus(id)
        }

}

    const handleSubmit = (type: string) => {
        switch (type) {
            case "Landscapes": {
                setGenresData({ ...genresData,
                    paintings: props.paintigns.landscapes,
                    sendBasketTh: props.sendBasketTh,
                    updateStatus: props.landscapesStatus
                })
                setStatusPaintings(true)
                break
            }
            case "Mountain landscapes": {
                setGenresData({
                    paintings: props.paintigns.mountainLandscapes,
                    sendBasketTh: props.sendBasketTh,
                    updateStatus: props.mountainStatus
                })
                setStatusPaintings(true)
                break
            }
            case "Seascapes": {
                setGenresData({
                    paintings: props.paintigns.seascapes,
                    sendBasketTh: props.sendBasketTh,
                    updateStatus: props.seascapesStatus
                })
                setStatusPaintings(true)
                break
            } 
            case "Still lifes": {
                setGenresData({
                    paintings: props.paintigns.stillLife,
                    sendBasketTh: props.sendBasketTh,
                    updateStatus: props.stillLifeStatus
                })
                setStatusPaintings(true)
                break
            } 
            case "Positive": {
                setGenresData({
                    paintings: props.paintigns.positive,
                    sendBasketTh: props.sendBasketTh,
                    updateStatus: props.positiveStatus
                })
                setStatusPaintings(true)
                break
            }
            default: {
                alert("Error try again")
                console.error('Error try again')
            }
        }
    }


    return (
        <Suspense fallback={PreloaderContainer}>
           { !statusPaintings  
           ? <div className="genresBox">
                {props.paintigns.genres.map(g => 
                <div key={g.id} className="gernes_item"  onClick={() => {
                    handleSubmit(g.title)
                    setType(g.title)}}>
                    <div className="genres__link_container">
                    <div className="genres__link" >
                        <p>{g.title}</p>
                    </div>
                    <div className="genres__img">
                        <img src={g.imgName} alt={g.imgName} />
                    </div>
                    </div>
                </div>
                )
                }
                </div>
            : <Landscapes genresData={genresData} onChangeStatus={onChangeStatus}  />
                }
        </Suspense>
    )
}

type PropsType = {
    paintigns: InitialStateType
}

type DispatchType = {
    sendBasketTh: (id: number, imgName: string, paintingName: string, price: number) => void 
    landscapesStatus: (id: number) => void
    mountainStatus: (id: number) => void
    positiveStatus: (id: number) => void
    seascapesStatus: (id: number) => void
    stillLifeStatus: (id: number) => void
}


const MapStateToProps = (state: AppStateType): PropsType => ({
    paintigns: state.canvasReduser
})


export default connect<PropsType, DispatchType, {}, AppStateType>(MapStateToProps, {landscapesStatus, mountainStatus, positiveStatus, seascapesStatus, sendBasketTh, stillLifeStatus})(GenresContainer)

 */

export const bla = {}