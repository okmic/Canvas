import React from "react";
import { connect } from "react-redux";
import { PaitingsType } from "../../../../../redux/canvasData";
import {positiveStatus, sendBasketTh } from "../../../../../redux/canvasReducer";
import Positive from "./Positive";

type MapStateToProps = {
    positive: Array<PaitingsType>
}
type DispatchType = {
    sendBasketTh: (id: number, imgName: string, paintingName: string, price: number) => void 
    positiveStatus: (id: number) => void
}
export type PropsTypePositive = MapStateToProps &  DispatchType

const PositiveContainer: React.FC<PropsTypePositive> = (props) => {

    return <Positive {...props} />
}

const mapStateToProps = (state: any): MapStateToProps  => {
    return{
        positive: state.canvasReduser.positive
    }
}

export default connect(mapStateToProps, {sendBasketTh, positiveStatus})(PositiveContainer)