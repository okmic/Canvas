import React from 'react';
import './contact.css';
import logok from '../img/logok.jpg'


const Contact = (props) => {
    return (
        <div className="contact">
            <img src={logok} alt="Art Fine on Canvas" className="logoContact"/>
           <div className="boxDate">
            <div className="infoContact">
                <h3>Наши контактные данные:</h3>
                <h4>Наш адрес:</h4>
                <h5>Россия, Карачаево-Черкесская Республика, Черкесск, Комсомольская улица, 40</h5>
                <h5><a href="tel:+79286587143">+7(928)658-71-43</a></h5> 
                <h5><a href="tel:+79887132617">+7(988)713-26-17</a></h5> 
                <h5><a href="mailto:canvas@bk.ru">Canvas@bk.ru</a></h5>
                <h5><a href="mailto:Okhtov.m@gmail.com">Okhtov.m@gmail.com</a></h5>  
            </div>
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Afbf9235ac21d1469bcd8cade3e1a80d5ee7ccdacc2f03c0999c04a02baedad0b&amp;source=constructor" width="900" height="500" frameborder="0"  title="iframeCanvas"></iframe>
        </div>
        </div>
                )
}

export default Contact