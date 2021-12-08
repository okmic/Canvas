import { lazy, Suspense } from 'react'
import './App.css'
import store from './redux/store'
import Navbar from './components/navBar/Navbar'
import Home from './components/Home/Home'
import Contact from './components/contact/Contact'
import ScrollToTop from './ScrollToTop/ScrollToTop'
import { Provider } from 'react-redux'
import PreloaderContainer from './components/common/Preloader/PreloaderContainer'
import BasketContainer from './components/basket/BasketContainer'
import FooterContainer from './components/Footer/FooterContainer'
import PaintingsContainer from './components/canvas/CanvasContainer'
import ScrollToTopAnimate from './ScrollToTop/ScrollToTopAnimate'
import {  BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound/NotFound'
const LandscapesContainer = lazy(() => import('./components/canvas/painting/genres/classic/landscapes/LandscapesContainer'))
const MountainContainer = lazy(() => import('./components/canvas/painting/genres/classic/mountainLandscapes/MountainContainer'))
const SeascapesContainer = lazy(() => import('./components/canvas/painting/genres/classic/seascapes/SeascapesContainer'))
const StillLifeContainer = lazy(() => import('./components/canvas/painting/genres/stillLife/StillLifeContainer'))
const PositiveContainer = lazy(() => import('./components/canvas/painting/genres/positive/PositiveContainer'))


function App(): any {
  return (
        <Suspense fallback={PreloaderContainer}>
        <div className="container__app">
          <Navbar />
        <div className="contOne">
          <div className="content">
            <ScrollToTop />
            <Routes>
            <Route  path='/Home'  element={<Home />} />

            <Route path='/Gallery' 
            element={<PaintingsContainer />} />
            <Route path='/Basket' element={<BasketContainer />} />
            <Route path='/Contacts' element={<Contact />} />
            <Route  path='/Gallary/Still-life'  element={<StillLifeContainer />} />
            <Route  path='/Gallary/Mountain-landscapes'  element={<MountainContainer />} />
            <Route  path='/Gallary/Landscapes'  element={<LandscapesContainer />} />
            <Route  path='/Gallary/Seascapes'  element={<SeascapesContainer />} />
            <Route  path='/Gallary/Positive'  element={<PositiveContainer />} />  
            <Route path="/Canvas" element={<Home />} />
            <Route path="/*" element={<NotFound />} />
            </Routes>
          </div>
        </div>   
        <div className="conteinerContent">
        <FooterContainer />
        </div>
        <ScrollToTopAnimate />
      </div> 
      </Suspense>   
  );
}

const CanvasApp = () => {
  return     <BrowserRouter>
      <Provider store={store}>
          <App />
      </Provider>
      </BrowserRouter>
}

export default CanvasApp;
