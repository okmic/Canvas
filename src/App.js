import React, { lazy, Suspense } from 'react'
import './App.css'
import store from './redux/store'
import Navbar from './components/navBar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Contact from './components/contact/Contact'
import ScrollToTop from './ScrollToTop'
import { connect, Provider } from 'react-redux'
import PreloaderContainer from './components/common/Preloader/PreloaderContainer'
import BasketContainer from './components/basket/BasketContainer'

const PaintingsContainer = lazy(() => import('./components/canvas/CanvasContainer'))


/* import Lesson from './components/modal/Modal'; */



function App(props) {

  return (
        <Suspense fallback={PreloaderContainer}>
        <div className="container__app">
          <Navbar />
        <div className="contOne">
          <div className="content">
            <ScrollToTop />
            <Switch>
            <Route  path='/Home'  render={() => <Home />} />

            <Route path='/Gallery' 
            render={() => <PaintingsContainer />} />

            <Route path='/Basket' render={() => <BasketContainer />} />
            <Route path='/Contacts' render={() => <Contact />} />
            <Redirect from="/" to="/Home" />
            </Switch>
          </div>
        </div>   
        <div className="conteinerContent">
        <Footer />
        </div>
      </div> 
      </Suspense>   
  );
}

const mapStateToProps = (state) => ({
  initialized: state.appReducer,
  messages: state.canvasReduser

})

let AppContainer =  connect(mapStateToProps)(App)

const CanvasApp = (props) => {
  return     <BrowserRouter>
      <Provider store={store}>
          <AppContainer />
      </Provider>
      </BrowserRouter>
}

export default CanvasApp;
