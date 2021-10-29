import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {sendBasketTh, stillLifeStatus } from "../../../../../redux/canvasReducer";
import PreloaderContainer from "../../../../common/Preloader/PreloaderContainer";
import StillLife from "./StillLife";

const StillLifeContainer = (props) => {
    const [completed, setCompleted] = useState(undefined)

    useEffect(() => {
        setTimeout(
            () => {
                       setCompleted(props.stillLife)
                    }, 700)
    }, [props.landscapes])
    
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