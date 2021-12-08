import React from "react";
import { connect } from "react-redux";
import {actions, sendBasketTh } from "../../../../../redux/canvasReducer";
import Positive from "./Positive";

const PositiveContainer = (props) => {

    return <Positive {...props} />
}

const mapStateToProps = (state) => {
    return{
        positive: state.canvasReduser.positive
    }
}

export default connect(mapStateToProps, {sendBasketTh, actions})(PositiveContainer)