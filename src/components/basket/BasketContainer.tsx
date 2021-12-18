import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { basketType } from "../../redux/canvasData";
import {orderStatus, removeItemTh, landscapesStatus, mountainStatus, positiveStatus, seascapesStatus, stillLifeStatus } from "../../redux/canvasReducer";
import { AppStateType } from "../../redux/store";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import PreloaderContainerHesh from "../common/Preloader/PreloaderContainer";
import Basket from "./Basket";

type MapStatePropsType = {
    paintings: Array<basketType>
    order: boolean
}

type MapDispatchPropsType = {
    removeItemTh: (id: number) => void
    orderStatus: () => void
    landscapesStatus: (id: number) => void
    mountainStatus: (id: number) => void
    seascapesStatus: (id: number) => void
    stillLifeStatus: (id: number) => void
    positiveStatus: (id: number) => void
    

}

let BasketContainer: React.FC<MapStatePropsType & MapDispatchPropsType | any> = (props) => {
    const [loading, setLoading] = useState(false)
    const [completed, setCompleted] = useState(false)
    
    const totalPrice = props.paintings.reduce((total: number, item: {price: number}) => total + item.price, 0)

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

    const removeItem = (id: number) => {
       props.removeItemTh(id)
           } 

    const removeOrderStatus = () => {
        return(
            props.orderStatus(),
            <ScrollToTop />
        )
    }

    return (
        ! completed ? <PreloaderContainerHesh />
        : <Basket  
        totalPrice={totalPrice} 
        paintings={props.paintings}  
        removeItem={removeItem} 
        buttonBasketACUp={props.buttonBasketACUp} 
        removeOrderStatus={removeOrderStatus} 
        order={props.order} 
        landscapesStatus={props.landscapesStatus}
        {...props}
        />
    )
} 

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        paintings: state.canvasReduser.basket,
        order: state.canvasReduser.order,
    }
}

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
    removeItemTh, orderStatus, landscapesStatus, mountainStatus, seascapesStatus, stillLifeStatus, positiveStatus}
    )(BasketContainer)