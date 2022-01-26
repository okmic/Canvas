import React from "react";
import { connect } from "react-redux";
import MountainLandscapes from "./MountainLandscapes";
import {mountainStatus, sendBasketTh } from "../../../../../../redux/canvasReducer";
import { PaitingsType } from "../../../../../../redux/canvasData";
import { AppStateType } from "../../../../../../redux/store";

type MapStateToProps = {
    mountainLandscapes: Array<PaitingsType>
}
type DispatchType = {
    sendBasketTh: (id: number, imgName: string, paintingName: string, price: number) => void 
    mountainStatus: (id: number) => void
}
export type PropsTypeMountain = MapStateToProps &  DispatchType

const MountainContainer: React.FC<PropsTypeMountain> = (props) => {

    return <MountainLandscapes {...props} />
}

const mapStateToProps = (state: AppStateType) => {
    return{
        mountainLandscapes: state.canvasReduser.mountainLandscapes
    }
}


export default connect<MapStateToProps, DispatchType, {}, AppStateType>(mapStateToProps, {sendBasketTh, mountainStatus})(MountainContainer)