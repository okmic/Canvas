import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { sendBasketTh } from "../../../../../../redux/canvasReducerCopy";
import { landscapesStatus } from "../../../../../../redux/canvasReducer";
import Landscapes from "./Landscapes";
import PreloaderContainer from "../../../../../common/Preloader/PreloaderContainer";

const LandscapesContainer = (props) => {

    const [completed, setCompleted] = useState(undefined)
    
    useEffect(() => {
    setTimeout(
        () => {
                   setCompleted(props.landscapes)
                }, 700)
}, [props.landscapes])

    return (
        ! completed ? <PreloaderContainer />
        : <Landscapes {...props} />
    )
}

const mapStateToProps = (state) => {
    return{
        landscapes: state.canvasReduser.landscapes
    }
}

export default connect(mapStateToProps, {sendBasketTh, landscapesStatus})(LandscapesContainer)