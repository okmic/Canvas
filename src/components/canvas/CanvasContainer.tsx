import React from 'react';
import { connect } from 'react-redux';
import { GenresType } from '../../redux/canvasData';
import { AppStateType } from '../../redux/store';
import Paintings from './Canvas';

const PaintingsContainer: React.FC<PropsType> = (props) => {
    return <Paintings genres={props.genres} />
}
type PropsType = {
    genres: Array<GenresType>
}
const MapStateToProps = (state: AppStateType): PropsType => ({genres: state.canvasReduser.genres})

export default connect<PropsType, {}, {}, AppStateType>(MapStateToProps)(PaintingsContainer)