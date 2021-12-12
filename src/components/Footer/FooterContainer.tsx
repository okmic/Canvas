import React from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/store';
import Footer from './Footer';

export type MapStateToPropsFooter = {
    number: number
}

const FooterContainer: React.FC<MapStateToPropsFooter> = (props) => {
    return <Footer number={props.number} />
}

const mapStateToProps = (state: AppStateType):MapStateToPropsFooter => {
    return {
        number: state.canvasReduser.basket.length
    }
}

export default React.memo(connect(mapStateToProps)(FooterContainer))