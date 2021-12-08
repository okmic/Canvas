import { connect } from "react-redux";
import MountainLandscapes from "./MountainLandscapes";
import { actions, sendBasketTh } from "../../../../../../redux/canvasReducer";

const MountainContainer = (props) => {

    return <MountainLandscapes {...props} />
}

const mapStateToProps = (state) => {
    return{
        mountainLandscapes: state.canvasReduser.mountainLandscapes
    }
}


export default connect(mapStateToProps, {sendBasketTh, actions})(MountainContainer)