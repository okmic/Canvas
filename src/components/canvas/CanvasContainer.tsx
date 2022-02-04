import React from 'react';
import { connect } from 'react-redux';
import { GenresType, PaitingsType } from '../../redux/canvasData';
import {genresFilter, moreOrLess, removeFilters, sendBasketTh, updateButtonStatus } from '../../redux/canvasReducer';
import { AppStateType } from '../../redux/store';
import Canvas from './Canvas';

const PaintingsContainer: React.FC<CanvasPropsType> = (props) => {

    return <Canvas {...props} />
}
type PropsType = {
    paintings: Array<PaitingsType>
    genres: Array<GenresType>
}

export type CanvasPropsType = DispatchType & PropsType

export type DispatchType = {
    sendBasketTh: (id: number, imgName: string, paintingName: string, price: number) => void 
    updateButtonStatus: (id: number) => void
    moreOrLess: (order: "more" | 'less') => void
    genresFilter: (id: number) => void
    removeFilters: () => void
}

const MapStateToProps = (state: AppStateType): PropsType => ({
    paintings: state.canvasReduser.paintings,
    genres: state.canvasReduser.genres
})


export default connect<PropsType, DispatchType, {}, AppStateType>(MapStateToProps, {sendBasketTh, updateButtonStatus, moreOrLess, removeFilters, genresFilter})(PaintingsContainer)