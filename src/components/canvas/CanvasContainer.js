import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PreloaderContainer from '../common/Preloader/PreloaderContainer';
import Paintings from './Canvas';

const PaintingsContainer = React.memo(props => {
    const [loading, setLoading] = useState(undefined)
    const [completed, setCompleted] = useState(undefined)
 
    useEffect(() => {
    setTimeout(
        () => {
            setLoading(true)
            setTimeout(
                () => {
                   setCompleted(true)
                }, 200)
        }, 500)
}, [loading, props.paintingData])

    return (
        ! completed ? <PreloaderContainer />
        : <Paintings genres={props.genres} />
    )
})

const mapStateToProps = (state) => {
    return{
        genres: state.canvasReduser.genres
    }
}

export default connect(mapStateToProps)(PaintingsContainer)