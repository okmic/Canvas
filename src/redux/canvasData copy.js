import img1 from '../components/img/canvas/img_1.jpeg'
import img2 from '../components/img/canvas/img_2.jpg';
import img3 from '../components/img/canvas/img_3.jpg';
import img4 from '../components/img/canvas/img_4.jpg';
import img5 from '../components/img/canvas/img_5.jpg';
import img6 from '../components/img/canvas/img_6.jpg';
import img7 from '../components/img/canvas/img_7.jpg';
import img8 from '../components/img/canvas/img_8.jpg';
import img9 from '../components/img/canvas/img_9.jpg';
import img10 from '../components/img/canvas/img_10.jpg';
import img11 from '../components/img/canvas/img_11.jpg';
import img12 from '../components/img/canvas/img_12.jpg';
import img13 from '../components/img/canvas/img_13.jpg';
import img14 from '../components/img/canvas/img_14.jpg';
import img15 from '../components/img/canvas/img_15.jpg';

import img16 from '../components/img/canvas/img_16.jpeg'
import img17 from '../components/img/canvas/img_17.jpeg'
import img18 from '../components/img/canvas/img_18.jpeg'
import img19 from '../components/img/canvas/img_19.jpeg'
import img20 from '../components/img/canvas/img_20.jpeg'
import img21 from '../components/img/canvas/img_21.jpeg'
import img22 from '../components/img/canvas/img_22.jpeg'
import img23 from '../components/img/canvas/img_23.jpeg'
import img24 from '../components/img/canvas/img_24.jpeg'
import img25 from '../components/img/canvas/img_25.jpeg'
import img26 from '../components/img/canvas/img_26.jpeg'
import img27 from '../components/img/canvas/img_27.jpeg'
import img28 from '../components/img/canvas/img_28.jpeg'
import img29 from '../components/img/canvas/img_29.jpeg'
import img30 from '../components/img/canvas/img_30.jpeg'

import img31 from '../components/img/canvas/img_31.jpeg'
import img32 from '../components/img/canvas/img_32.jpeg'
import img33 from '../components/img/canvas/img_33.jpeg'
import img34 from '../components/img/canvas/img_34.jpeg'
import img35 from '../components/img/canvas/img_35.jpeg'
import img36 from '../components/img/canvas/img_36.jpg'
import img37 from '../components/img/canvas/img_37.jpeg'
import img38 from '../components/img/canvas/img_38.jpeg'
import img39 from '../components/img/canvas/img_39.jpeg'
import img40 from '../components/img/canvas/img_40.jpeg'
import img41 from '../components/img/canvas/img_41.jpeg'
import img42 from '../components/img/canvas/img_42.jpeg'
import img43 from '../components/img/canvas/img_43.jpeg'
import img44 from '../components/img/canvas/img_44.jpeg'
import img45 from '../components/img/canvas/img_45.jpeg'

import img46 from '../components/img/canvas/img_46.jpeg'
import img47 from '../components/img/canvas/img_47.jpeg'
import img48 from '../components/img/canvas/img_48.jpeg'
import img49 from '../components/img/canvas/img_49.jpeg'
import img50 from '../components/img/canvas/img_50.jpeg'
import img51 from '../components/img/canvas/img_51.jpeg'
import img52 from '../components/img/canvas/img_52.jpeg'
import img53 from '../components/img/canvas/img_53.jpeg'
import img54 from '../components/img/canvas/img_54.jpeg'
import img55 from '../components/img/canvas/img_55.jpeg'
import img56 from '../components/img/canvas/img_56.jpeg'
import img57 from '../components/img/canvas/img_57.jpeg'
import img58 from '../components/img/canvas/img_58.jpeg'
import img59 from '../components/img/canvas/img_59.jpeg'
import img60 from '../components/img/canvas/img_60.jpeg'

import img61 from '../components/img/canvas/img_61.jpeg'
import img62 from '../components/img/canvas/img_62.jpeg'
import img63 from '../components/img/canvas/img_63.jpeg'
import img64 from '../components/img/canvas/img_64.jpeg'
import img65 from '../components/img/canvas/img_65.jpeg'
import img66 from '../components/img/canvas/img_66.jpeg'
import img67 from '../components/img/canvas/img_67.jpeg'
import img68 from '../components/img/canvas/img_68.jpeg'
import img69 from '../components/img/canvas/img_69.jpeg'
import img70 from '../components/img/canvas/img_70.jpeg'
import img71 from '../components/img/canvas/img_71.jpg'
import img72 from '../components/img/canvas/img_72.jpg'
import img73 from '../components/img/canvas/img_73.jpg'
import img74 from '../components/img/canvas/img_74.jpg'
import img75 from '../components/img/canvas/img_75.jpg'
import img76 from '../components/img/canvas/img_76.jpg'



const initialState = {
    basket: [],
    paintingData: {
        classic : {
            landscapes:{
                genres: "landscapes",
                paintings:[
                { id: 1, imgName: img1, paintingName: "Березы освещенные солнцем", price: 10000, buttonState: true,  description: {meterial: "Холст маслом", size: "Размер: 55х74"} },
                { id: 7, imgName: img7, paintingName: "Дубы Петра Великого", price: 100000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 75х117"} },
                { id: 11, imgName: img11, paintingName: "Маки", price: 9000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х80"} },
                { id: 15, imgName: img15, paintingName: "Романтическая компазиция", price: 11000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 61х85"} }, 
                { id: 19, imgName: img19, paintingName: "К", price: 12000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 66х77"} },
                { id: 20, imgName: img20, paintingName: "К", price: 8000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 70х80"} },
                { id: 21, imgName: img21, paintingName: "К", price: 7000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 50х60"} },
                { id: 23, imgName: img23, paintingName: "К", price: 100000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 75х117"} },
                { id: 24, imgName: img24, paintingName: "К", price: 13000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 55х75"} },
                { id: 25, imgName: img25, paintingName: "К", price: 13000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х93"} },
                { id: 26, imgName: img26, paintingName: "К", price: 11000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 73х92"} },
                { id: 27, imgName: img27, paintingName: "К", price: 9000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х80"} },
                { id: 28, imgName: img28, paintingName: "К", price: 9000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 55х74"} },
                { id: 32, imgName: img32, paintingName: "К", price: 12000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 66х77"} },
                { id: 33, imgName: img33, paintingName: "К", price: 8000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 70х80"} },
                { id: 34, imgName: img34, paintingName: "К", price: 7000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 50х60"} },
                { id: 35, imgName: img35, paintingName: "К", price: 100000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 75х117"} },
                { id: 37, imgName: img37, paintingName: "К", price: 13000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х93"} },
                { id: 38, imgName: img38, paintingName: "К", price: 11000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 73х92"} },
                { id: 40, imgName: img40, paintingName: "К", price: 9000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 55х74"} },
                { id: 43, imgName: img43, paintingName: "К", price: 10000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 61х91"} },
                { id: 44, imgName: img44, paintingName: "К", price: 12000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 66х77"} },
                { id: 47, imgName: img47, paintingName: "К", price: 100000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 75х117"} },
                { id: 51, imgName: img51, paintingName: "К", price: 9000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х80"} },
                { id: 52, imgName: img52, paintingName: "К", price: 9000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 55х74"} },
                { id: 55, imgName: img55, paintingName: "К", price: 10000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 61х91"} },
                { id: 58, imgName: img58, paintingName: "К", price: 7000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 50х60"} },
                { id: 59, imgName: img59, paintingName: "К", price: 100000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 75х117"} },
                { id: 61, imgName: img61, paintingName: "К", price: 13000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х93"} },
                { id: 63, imgName: img63, paintingName: "К", price: 9000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х80"} },
                { id: 64, imgName: img64, paintingName: "К", price: 9000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 55х74"} },
                { id: 65, imgName: img65, paintingName: "К", price: 9000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х70"} },
                { id: 74, imgName: img74, paintingName: "К", price: 11000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 73х92"} },
                { id: 75, imgName: img75, paintingName: "К", price: 9000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х80"} },
                { id: 76, imgName: img76, paintingName: "К", price: 9000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 55х74"} }
            ]
            },
            mountainLandscapes:{
                genres: "mountainLandscapes",
                paintings:[
                { id: 9, imgName: img9, paintingName: "Горный пейзаж", price: 13000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х93"} },
                { id: 30, imgName: img30, paintingName: "К", price: 7000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х70"} },
                { id: 36, imgName: img36, paintingName: "К", price: 13000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 55х75"} },
                { id: 50, imgName: img50, paintingName: "К", price: 11000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 73х92"} },
                { id: 60, imgName: img60, paintingName: "К", price: 13000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 55х75"} },
                { id: 69, imgName: img69, paintingName: "К", price: 8000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 70х80"} },
            ]
        },
            seascapes:{
            genres: "seascapes", 
            paintings:[
                { id: 4, imgName: img4, paintingName: "Лазурное побережье", price: 12000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 66х77"} },
                { id: 13, imgName: img13, paintingName: "Побережье", price: 9000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х70"} },
                { id: 16, imgName: img16, paintingName: "К", price: 7000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х70"} },
                { id: 17, imgName: img17, paintingName: "К", price: 7000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х70"} },
                { id: 18, imgName: img18, paintingName: "К", price: 10000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 61х91"} },
                { id: 29, imgName: img29, paintingName: "К", price: 9000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х70"} },
                { id: 31, imgName: img31, paintingName: "К", price: 10000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 61х91"} },
                { id: 41, imgName: img41, paintingName: "К", price: 9000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х70"} },
                { id: 49, imgName: img49, paintingName: "К", price: 13000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х93"} },
                { id: 54, imgName: img54, paintingName: "К", price: 7000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х70"} },
                { id: 56, imgName: img56, paintingName: "К", price: 12000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 66х77"} },
                { id: 57, imgName: img57, paintingName: "К", price: 8000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 70х80"} },

            ]
        }
        },
        stillLife:{
        genres: "stillLife",
        paintings:[
            { id: 2, imgName: img2, paintingName: "Цветы на серебряном фоне", price: 7000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х70"} },
            { id: 3, imgName: img3, paintingName: "Цветы на столе", price: 10000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 61х91"} },
            { id: 5, imgName: img5, paintingName: "Яркие цветы", price: 8000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 70х80"} },
            { id: 6, imgName: img6, paintingName: "Цветы", price: 7000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 50х60"} },
            { id: 22, imgName: img22, paintingName: "К", price: 7000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 50х60"} },
            { id: 39, imgName: img39, paintingName: "К", price: 9000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х80"} },
            { id: 42, imgName: img42, paintingName: "К", price: 7000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х70"} },
            { id: 48, imgName: img48, paintingName: "К", price: 13000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 55х75"} },
            { id: 62, imgName: img62, paintingName: "К", price: 11000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 73х92"} },
            { id: 66, imgName: img66, paintingName: "К", price: 7000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х70"} },
            { id: 70, imgName: img70, paintingName: "К", price: 9000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 55х74"} }

        ]},
        positive:{
        genres: "positive",
        paintings:[
            { id: 8, imgName: img8, paintingName: "Не сон", price: 13000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 55х75"} },
            { id: 10, imgName: img10, paintingName: "К свету", price: 11000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 73х92"} },
            { id: 12, imgName: img12, paintingName: "Колбасы на всех не хватит", price: 9000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 55х74"} },
            { id: 14, imgName: img14, paintingName: "Кот приносящий удачу", price: 6000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 55х74"} },
            { id: 45, imgName: img45, paintingName: "К", price: 8000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 70х80"} },
            { id: 46, imgName: img46, paintingName: "К", price: 7000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 50х60"} },
            { id: 53, imgName: img53, paintingName: "К", price: 9000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х70"} },
            { id: 67, imgName: img67, paintingName: "К", price: 10000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 61х91"} },
            { id: 68, imgName: img68, paintingName: "К", price: 12000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 66х77"} },
            { id: 71, imgName: img71, paintingName: "К", price: 100000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 75х117"} },
            { id: 72, imgName: img72, paintingName: "К", price: 13000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 55х75"} },
            { id: 73, imgName: img73, paintingName: "К", price: 13000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х93"} },
            

        ]}
    },
    order: false
}

export default initialState