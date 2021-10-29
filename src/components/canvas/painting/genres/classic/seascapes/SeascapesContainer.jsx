import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Seascapes from "./Seascapes";
import {seascapesStatus, sendBasketTh } from "../../../../../../redux/canvasReducer";
import PreloaderContainer from "../../../../../common/Preloader/PreloaderContainer";


const SeascapesContainer = (props) => {
  
    const [completed, setCompleted] = useState(undefined)

    useEffect(() => {
        setTimeout(
            () => {
                       setCompleted(props.seascapes)
                    }, 700)
    }, [props.landscapes])
    
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