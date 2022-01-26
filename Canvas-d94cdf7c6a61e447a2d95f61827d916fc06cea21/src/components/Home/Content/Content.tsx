import './content.css';
import ContentModule from './contentModule/ContentModule';
import kontOne from '../../img/imgh1.png';
import kontTwo from '../../img/imgh2.png';
import kontFhree from '../../img/imgh3.png';
import kontFour from '../../img/imgh4.png';
import kontFive from '../../img/imgh5.png';
import kontSi from '../../img/imgh6.png';


const Content = () => {
    return (
         <div className="content__container">
            <ContentModule imgName={kontOne} description="If you want to enrich your interior or make a gift to someone - you've come to the right place!" />
            <ContentModule imgName={kontTwo} description="This year's theme is the future of travel. Come to us! You will not be disappointed!" />
            <ContentModule imgName={kontFhree} description="You can always offer us your work. The artist will paint it with minimal changes." />
            <ContentModule imgName={kontFour} description="Oil paintings live for centuries, with good care." />
            <ContentModule imgName={kontFive} description="You can order your baguettes! Call us or write, we will definitely respond." />
            <ContentModule imgName={kontSi} description="We can offer art craft training from artists with 20 years of experience." />
        </div>
    )
}

export default Content