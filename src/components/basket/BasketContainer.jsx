import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PreloaderContainer from "../common/Preloader/PreloaderContainer";
import Basket from "./Basket";


let BasketContainer = (props) => {
    const [loading, setLoading] = useState(undefined)
    const [completed, setCompleted] = useState(undefined)


    useEffect(() => {
    setTimeout(
        () => {
            setLoading(true)
            setTimeout(
                () => {
                   setCompleted(true)
                }, 500)
        }, 1000)
}, [loading])

    return(
        ! completed ? <PreloaderContainer />
        : <Basket paintings={props.paintings} />
    )
} 

const mapStateToProps = (state) => {
    return {
        paintings: state.canvasReduser.basket
    }
}

export default connect(mapStateToProps)(BasketContainer)