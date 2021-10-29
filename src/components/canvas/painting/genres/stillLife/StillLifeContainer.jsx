import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {sendBasketTh, stillLifeStatus } from "../../../../../redux/canvasReducer";
import PreloaderContainer from "../../../../common/Preloader/PreloaderContainer";
import StillLife from "./StillLife";

const StillLifeContainer = (props) => {

    const [loading, setLoading] = useState(undefined)
    const [completed, setCompleted] = useState(undefined)
    
    
    useEffect(() => {
    setTimeout(
        () => {
            setLoading(true)
            setTimeout(
                () => {
                   setCompleted(props.stillLife)
                }, 200)
        }, 300)
}, [loading, props.stillLife])

    return (
        ! completed ? <PreloaderContainer />
        : <StillLife {...props} />
        )
}

const mapStateToProps = (state) => {
    return{
        stillLife: state.canvasReduser.stillLife
    }
}

export default connect(mapStateToProps, {sendBasketTh, stillLifeStatus})(StillLifeContainer)