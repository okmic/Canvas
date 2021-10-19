import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { sendBasket } from '../../redux/canvasReducer';
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
                   setCompleted(true)
                }, 1000)
        }, 1500)
}, [loading])
    return (
        !completed ? <PreloaderContainer />
        :<Paintings sendBasket={props.sendBasket} />
    )
}

const mapStateToProps = (state) => {
    return{
    srsa: state.canvasReduser
}}

export default connect(mapStateToProps, {sendBasket})(PaintingsContainer)