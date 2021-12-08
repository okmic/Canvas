import React from "react";
import { connect } from "react-redux";
import {sendBasketTh, landscapesStatus, actions } from "../../../../../../redux/canvasReducer";
import Landscapes from "./Landscapes";

const LandscapesContainer = (props) => {

    return <Landscapes {...props} />
}

const mapStateToProps = (state) => {
    return{
        landscapes: state.canvasReduser.landscapes
    }
}

export default connect(mapStateToProps, {actions})(LandscapesContainer)