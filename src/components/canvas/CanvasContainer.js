import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { buttonBasketAC, sendBasketTh } from '../../redux/canvasReducer';
import PreloaderContainer from '../common/Preloader/PreloaderContainer';
import Paintings from './Canvas';

const PaintingsContainer = (props) => {
    const [loading, setLoading] = useState(undefined)
    const [completed, setCompleted] = useState(undefined)
    
    
    useEffect(() => {
    setTimeout(
        () => {
            setLoading(true)
            setTimeout(
                () => {
                   setCompleted(props.paintingData && true)
                }, 1500)
        }, 1500)
}, [loading, props.paintingData])

    return (
        !completed ? <PreloaderContainer />
        :<Paintings sendBasketTh={props.sendBasketTh} buttonBasketAC={props.buttonBasketAC} paintingData={props.paintingData} />
    )
}

const mapStateToProps = (state) => {
    return{
        paintingData: state.canvasReduser.paintingData
}}

export default connect(mapStateToProps, {sendBasketTh, buttonBasketAC})(PaintingsContainer)