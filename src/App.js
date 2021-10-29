import React, { lazy, Suspense } from 'react'
import './App.css'
import store from './redux/store'
import Navbar from './components/navBar/Navbar'
import Home from './components/Home/Home'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Contact from './components/contact/Contact'
import ScrollToTop from './ScrollToTop/ScrollToTop'
import { connect, Provider } from 'react-redux'
import PreloaderContainer from './components/common/Preloader/PreloaderContainer'
import BasketContainer from './components/basket/BasketContainer'
import FooterContainer from './components/Footer/FooterContainer'
import PaintingsContainer from './components/canvas/CanvasContainer'

const LandscapesContainer = lazy(() => import('./components/canvas/painting/genres/classic/landscapes/LandscapesContainer'))
const MountainContainer = lazy(() => import('./components/canvas/painting/genres/classic/mountainLandscapes/MountainContainer'))
const SeascapesContainer = lazy(() => import('./components/canvas/painting/genres/classic/seascapes/SeascapesContainer'))
const StillLifeContainer = lazy(() => import('./components/canvas/painting/genres/stillLife/StillLifeContainer'))
const PositiveContainer = lazy(() => import('./components/canvas/painting/genres/positive/PositiveContainer'))


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
            <Route  path='/Gallary/Still-life'  render={() =>  <StillLifeContainer />} />
            <Route  path='/Gallary/Mountain-landscapes'  render={() => <MountainContainer />} />
            <Route  path='/Gallary/Landscapes'  render={() => <LandscapesContainer />} />
            <Route  path='/Gallary/Seascapes'  render={() => <SeascapesContainer />} />
            <Route  path='/Gallary/Positive'  render={() => <PositiveContainer />} />  
            <Redirect from="/" to="/Home" />
            </Switch>
          </div>
        </div>   
        <div className="conteinerContent">
        <FooterContainer />
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
