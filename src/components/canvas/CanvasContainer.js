import React from 'react';
import { connect } from 'react-redux';
import Paintings from './Canvas';

const PaintingsContainer = React.memo(props => {

    return <Paintings genres={props.genres} />
})

const mapStateToProps = (state) => {
    return{
        genres: state.canvasReduser.genres
    }
}

export default connect(mapStateToProps)(PaintingsContainer)