import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { buttonBasketACUp, removeItemTh } from "../../redux/canvasReducer";


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
                    }, 1000)
            }, 1500)
    }, [loading])


    const removeItem = (id) => {
       props.removeItemTh(id)
           } 

    return (
         ! completed ? <PreloaderContainer />
        :  <Basket totalPrice={props.totalPrice} paintings={props.paintings}  removeItem={removeItem} buttonBasketACUp={props.buttonBasketACUp} />
    )
}

const mapStateToProps = (state) => {
debugger
    return {
        paintings: state.canvasReduser.basket,
        totalPrice: state.canvasReduser.basket.reduce((total, item) => total + item.price, 0)
    }
}

export default connect(mapStateToProps, {removeItemTh, buttonBasketACUp})(BasketContainer)