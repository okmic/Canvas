import React from 'react';
import { connect } from 'react-redux';
import { GenresType } from '../../redux/canvasData';
import Paintings from './Canvas';

const PaintingsContainer: React.FC<PropsType> = (props) => {
    return <Paintings genres={props.genres} />
}

const mapStateToProps = (state: any): PropsType => ({genres: state.canvasReduser.genres})

type PropsType = {
    genres: Array<GenresType>
}
export default connect<PropsType>(mapStateToProps)(PaintingsContainer)