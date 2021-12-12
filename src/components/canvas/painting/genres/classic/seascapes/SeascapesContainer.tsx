import React from "react";
import { connect } from "react-redux";
import Seascapes from "./Seascapes";
import {seascapesStatus, sendBasketTh } from "../../../../../../redux/canvasReducer";
import { PaitingsType } from "../../../../../../redux/canvasData";
import { AppStateType } from "../../../../../../redux/store";

type MapStateToProps = {
    seascapes: Array<PaitingsType>
}
type DispatchType = {
    sendBasketTh: (id: number, imgName: string, paintingName: string, price: number) => void 
    seascapesStatus: (id: number) => void
}
export type PropsTypeSeascapes = MapStateToProps &  DispatchType

const SeascapesContainer: React.FC<PropsTypeSeascapes> = (props) => {
    return <Seascapes {...props} />
}

const mapStateToProps = (state: AppStateType) => {
    return{
        seascapes: state.canvasReduser.seascapes
    }
}

export default connect(mapStateToProps, {sendBasketTh, seascapesStatus})(SeascapesContainer)