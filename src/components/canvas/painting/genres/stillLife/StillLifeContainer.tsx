import React from "react";
import { connect } from "react-redux";
import { PaitingsType } from "../../../../../redux/canvasData";
import {sendBasketTh, stillLifeStatus } from "../../../../../redux/canvasReducer";
import { AppStateType } from "../../../../../redux/store";
import StillLife from "./StillLife";

type mapPropsType = {
    stillLife: Array<PaitingsType>
}
type DispatchType = {
    sendBasketTh: (id: number, imgName: string, paintingName: string, price: number) => void 
    stillLifeStatus: (id: number) => void
}
export type PropsTypeStillLife = mapPropsType &  DispatchType

const StillLifeContainer: React.FC<PropsTypeStillLife> = (props) => {

    return <StillLife 
    stillLife={props.stillLife}
    sendBasketTh={props.sendBasketTh}
    stillLifeStatus={props.stillLifeStatus}
    />
}

const mapStateToProps = (state: AppStateType): mapPropsType => {
    return{
        stillLife: state.canvasReduser.stillLife
    }
}

export default connect<mapPropsType, DispatchType, {}, AppStateType>(mapStateToProps, {sendBasketTh, stillLifeStatus})(StillLifeContainer)