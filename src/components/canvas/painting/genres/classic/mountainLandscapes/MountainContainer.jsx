import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import MountainLandscapes from "./MountainLandscapes";
import {mountainStatus, sendBasketTh } from "../../../../../../redux/canvasReducer";
import PreloaderContainer from "../../../../../common/Preloader/PreloaderContainer";

const MountainContainer = (props) => {

    const [loading, setLoading] = useState(undefined)
    const [completed, setCompleted] = useState(undefined)
    
    
    useEffect(() => {
    setTimeout(
        () => {
            setLoading(true)
            setTimeout(
                () => {
                   setCompleted(props.mountainLandscapes)
                }, 200)
        }, 300)
}, [loading, props.mountainLandscapes])

    return (
        ! completed ? <PreloaderContainer />
        : <MountainLandscapes {...props} />
    )
}

const mapStateToProps = (state) => {
    return{
        mountainLandscapes: state.canvasReduser.mountainLandscapes
    }
}


export default connect(mapStateToProps, {sendBasketTh, mountainStatus})(MountainContainer)