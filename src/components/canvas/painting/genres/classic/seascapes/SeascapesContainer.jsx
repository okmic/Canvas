import React from "react";
import { connect } from "react-redux";
import Seascapes from "./Seascapes";
import {seascapesStatus, sendBasketTh } from "../../../../../../redux/canvasReducer";



const SeascapesContainer = (props) => {
    return <Seascapes {...props} />
}

const mapStateToProps = (state) => {
    return{
        seascapes: state.canvasReduser.seascapes
    }
}

export default connect(mapStateToProps, {sendBasketTh, seascapesStatus})(SeascapesContainer)