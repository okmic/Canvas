import React from "react";
import { connect } from "react-redux";
import MountainLandscapes from "./MountainLandscapes";
import {mountainStatus, sendBasketTh } from "../../../../../../redux/canvasReducer";

const MountainContainer = (props) => {
    return(
        <MountainLandscapes {...props} />
    )
}

const mapStateToProps = (state) => {
    return{
        mountainLandscapes: state.canvasReduser.mountainLandscapes
    }
}


export default connect(mapStateToProps, {sendBasketTh, mountainStatus})(MountainContainer)