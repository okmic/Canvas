import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Seascapes from "./Seascapes";
import {seascapesStatus, sendBasketTh } from "../../../../../../redux/canvasReducer";
import PreloaderContainer from "../../../../../common/Preloader/PreloaderContainer";


const SeascapesContainer = (props) => {
  
    const [loading, setLoading] = useState(undefined)
    const [completed, setCompleted] = useState(undefined)
    
    
    useEffect(() => {
    setTimeout(
        () => {
            setLoading(true)
            setTimeout(
                () => {
                   setCompleted(props.seascapes)
                }, 200)
        }, 300)
}, [loading, props.seascapes])

    return (
        ! completed ? <PreloaderContainer />
        : <Seascapes {...props} />
    )
}

const mapStateToProps = (state) => {
    return{
        seascapes: state.canvasReduser.seascapes
    }
}

export default connect(mapStateToProps, {sendBasketTh, seascapesStatus})(SeascapesContainer)