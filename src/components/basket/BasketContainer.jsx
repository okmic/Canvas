import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {orderStatus, removeItemTh, landscapesStatus, mountainStatus, positiveStatus, seascapesStatus, stillLifeStatus } from "../../redux/canvasReducer";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";


import PreloaderContainer from "../common/Preloader/PreloaderContainer";
import Basket from "./Basket";


let BasketContainer = React.memo(props => {
    const [loading, setLoading] = useState(undefined)
    const [completed, setCompleted] = useState(undefined)
    
    useEffect(() => {
        setTimeout(
            () => {
                setLoading(true)
                setTimeout(
                    () => {
                       setCompleted(true)
                    }, 200)
            }, 500)
    }, [loading])

    const removeItem = (id) => {
       props.removeItemTh(id)
           } 

    const removeOrderStatus = () => {
        return(
            props.orderStatus(),
            <ScrollToTop />
        )
    }

    return (
        ! completed ? <PreloaderContainer />
        : <Basket  
        totalPrice={props.totalPrice} 
        paintings={props.paintings}  
        removeItem={removeItem} 
        buttonBasketACUp={props.buttonBasketACUp} 
        removeOrderStatus={removeOrderStatus} 
        order={props.order} 
        landscapesStatus={props.landscapesStatus}
        {...props}
        />
    )
})

const mapStateToProps = (state) => {
    return {
        paintings: state.canvasReduser.basket,
        totalPrice: state.canvasReduser.basket.reduce((total, item) => total + item.price, 0),
        order: state.canvasReduser.order,
    }
}

export default connect(mapStateToProps, {
    removeItemTh, orderStatus, landscapesStatus, mountainStatus, seascapesStatus, stillLifeStatus, positiveStatus}
    )(BasketContainer)