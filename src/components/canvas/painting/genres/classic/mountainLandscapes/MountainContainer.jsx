import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import MountainLandscapes from "./MountainLandscapes";
import {mountainStatus, sendBasketTh } from "../../../../../../redux/canvasReducer";
import PreloaderContainer from "../../../../../common/Preloader/PreloaderContainer";

const MountainContainer = (props) => {

    const [completed, setCompleted] = useState(undefined)

    useEffect(() => {
        setTimeout(
            () => {
                       setCompleted(props.mountainLandscapes)
                    }, 700)
    }, [props.landscapes])
    
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