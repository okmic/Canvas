import React, { useEffect, useState } from 'react';

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
                }, 300)
        }, 200)
}, [loading, props.paintingData])

    return (
        ! completed ? <PreloaderContainer />
        : <Paintings />
    )
})


export default PaintingsContainer