import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {positiveStatus, sendBasketTh } from "../../../../../redux/canvasReducer";
import PreloaderContainer from "../../../../common/Preloader/PreloaderContainer";
import Positive from "./Positive";

const PositiveContainer = (props) => {

    const [loading, setLoading] = useState(undefined)
    const [completed, setCompleted] = useState(undefined)
    
    
    useEffect(() => {
    setTimeout(
        () => {
            setLoading(true)
            setTimeout(
                () => {
                   setCompleted(props.positive)
                }, 200)
        }, 300)
}, [loading, props.positive])

    return (
        ! completed ? <PreloaderContainer />
        : <Positive {...props} />
    )
}

const mapStateToProps = (state) => {
    return{
        positive: state.canvasReduser.positive
    }
}

export default connect(mapStateToProps, {sendBasketTh, positiveStatus})(PositiveContainer)