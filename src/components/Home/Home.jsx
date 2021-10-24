import React, { useEffect, useState } from 'react';
import './home.css';
import logo from '../img/logo.png'
import koni from '../img/koni.jpg'
import Content from './Content/Content';
import Contact from '../contact/Contact';
import PreloaderContainer from '../common/Preloader/PreloaderContainer';


const Home = React.memo(props => {

    const [loading, setLoading] = useState(undefined)
    const [completed, setCompleted] = useState(undefined)

    useEffect(() => {
    setTimeout(
        () => {
            setLoading(true)
            setTimeout(
                () => {
                   setCompleted(true)
                }, 500)
        }, 500)
}, [loading])

    return (
        !completed 
        ? <PreloaderContainer /> 
        :   <div className="container__home">
            <div className="conteinerHome">
                <div className="logo">
                    <img src={logo} alt={"Art Fine on Canvas"} />
                </div>
                <div className="title">
                    <div className="borderBlack">
                        <span>Добро пожаловать</span>
                    </div>
                </div>
                <div className="koni">
                    <img src={koni} alt={"Кони"} />
                </div>
            </div>
            <Content />
            <Contact />
        </div>
        )
})

export default Home