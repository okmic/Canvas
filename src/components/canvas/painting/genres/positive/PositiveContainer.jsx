import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {positiveStatus, sendBasketTh } from "../../../../../redux/canvasReducer";
import PreloaderContainer from "../../../../common/Preloader/PreloaderContainer";
import Positive from "./Positive";

const PositiveContainer = (props) => {
    const [completed, setCompleted] = useState(undefined)

    useEffect(() => {
        setTimeout(
            () => {
                       setCompleted(props.positive)
                    }, 700)
    }, [props.landscapes])
    
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