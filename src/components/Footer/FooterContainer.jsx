import React from 'react';
import { connect } from 'react-redux';
import Footer from './Footer';


const FooterContainer = (props) => {
    return <Footer {...props} />
}

const mapStateToProps = (state) => {
    return {
        namber: state.canvasReduser.basket.length
    }
}

export default connect(mapStateToProps)(FooterContainer)