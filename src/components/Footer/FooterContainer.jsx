import React from 'react';
import { connect } from 'react-redux';
import Footer from './Footer';


const FooterContainer = (props) => {

    return <Footer {...props} />
}

const mapStateToProps = (state) => {
    return {
        namber: state.canvasReduser.computeForBasket
    }
}

export default connect(mapStateToProps)(FooterContainer)