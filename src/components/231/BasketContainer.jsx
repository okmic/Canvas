import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import PreloaderContainerHesh from "../common/Preloader/PreloaderContainer";
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
       props.actions.removeItemTh(id)
           } 

    const removeOrderStatus = () => {
        return(
            props.actions.orderStatus(),
            <ScrollToTop />
        )
    }

    return (
        ! completed ? <PreloaderContainerHesh />
        : <Basket  
        totalPrice={props.actions.totalPrice} 
        paintings={props.paintings}  
        removeItem={removeItem} 
        buttonBasketACUp={props.actionsbuttonBasketACUp} 
        removeOrderStatus={removeOrderStatus} 
        order={props.order} 
        landscapesStatus={props.actionslandscapesStatus}
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

export default connect(mapStateToProps, {actions}
    )(BasketContainer)