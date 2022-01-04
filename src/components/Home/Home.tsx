import React, { useEffect, useState } from 'react';
import './home.css';
import logo from '../img/logo.png'
import koni from '../img/koni.jpg'
import Content from './Content/Content';
import Contact from '../contact/Contact';
import PreloaderOut from '../common/Preloader/Preloader';
import { timeoutOne } from '../common/timeout';


const Home = React.memo(props => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        timeoutOne(setLoading, 900)
    }, [loading])

    return (
        <>
        <div className="container__home">
        <PreloaderOut preloaderStatus={loading} />
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
        </>
    )
})

export default Home