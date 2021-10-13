import React from 'react';
import './content.css';
import ContentModule from './contentModule/ContentModule';
import kontOne from '../../img/imgh1.png';
import kontTwo from '../../img/imgh2.png';
import kontFhree from '../../img/imgh3.png';
import kontFour from '../../img/imgh4.png';
import kontFive from '../../img/imgh5.png';
import kontSi from '../../img/imgh6.png';

const Content = (props) => {
    return (
        <div className="content__container">
            <ContentModule imgName={kontOne} description="Если вы хотите обоготить Ваш интерьер или сделать кому-либо подарок - Вы зашли по адресу!" />
            <ContentModule imgName={kontTwo} description="В этом году тема - будущее путешествий. Приходите к нам! Вы не разочаруетесь!" />
            <ContentModule imgName={kontFhree} description="Вы всегда можете предложить нам свою работую. Художник напишет ее с минимальными изменениями." />
            <ContentModule imgName={kontFour} description="Картины написанные масляными красками могут жить столетиями, при хорошем уходе." />
            <ContentModule imgName={kontFive} description="Вы можете заказать свои багеты! Звоните нам или пишите, мы обязательно откликнемся." />
            <ContentModule imgName={kontSi} description="Мы может предложить обучение художественному ремеслу от художников с 20-летним опытом." />
        </div>
    )
}

export default Content