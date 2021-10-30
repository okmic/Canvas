import React from "react";
import { connect } from "react-redux";
import {sendBasketTh, stillLifeStatus } from "../../../../../redux/canvasReducer";
import StillLife from "./StillLife";

const StillLifeContainer = (props) => {

    return <StillLife {...props} />
}

const mapStateToProps = (state) => {
    return{
        stillLife: state.canvasReduser.stillLife
    }
}

export default connect(mapStateToProps, {sendBasketTh, stillLifeStatus})(StillLifeContainer)