import React from "react";
import { connect } from "react-redux";
import { PaitingsType } from "../../../../../../redux/canvasData";
import {sendBasketTh, landscapesStatus } from "../../../../../../redux/canvasReducer";
import { AppStateType } from "../../../../../../redux/store";
import Landscapes from "./Landscapes";

type MapStateToProps = {
    landscapes: Array<PaitingsType>
}
type DispatchType = {
    sendBasketTh: (id: number, imgName: string, paintingName: string, price: number) => void 
    landscapesStatus: (id: number) => void
}
export type PropsTypeLandscapes = MapStateToProps &  DispatchType


const LandscapesContainer: React.FC<PropsTypeLandscapes> = (props) => {

    return <Landscapes {...props} />
}

const mapStateToProps = (state: AppStateType) => {
    return{
        landscapes: state.canvasReduser.landscapes
    }
}

export default connect<MapStateToProps, DispatchType, {}, AppStateType>(mapStateToProps, {sendBasketTh, landscapesStatus})(LandscapesContainer)