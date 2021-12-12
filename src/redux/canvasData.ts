import back1 from '../components/img/background/back_1.jpg'
import back2 from '../components/img/background/back_2.jpg'
import back3 from '../components/img//background/back_3.jpeg'
import back4 from '../components/img//background/back_4.jpg'
import back5 from '../components/img//background/back_5.jpeg'

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

type basketDataType = {
    id: number
    imgName: string
    title: string
}
export type basketType = basketDataType

export type GenresType = {
    id: number
    imgName: any
    title: string
    url: string
}
export type PaitingsType = {
    id: number
    imgName: string
    paintingName: string
    price: number
    buttonState: boolean
    description: {
        meterial: string
        size: string
    }
}

export type InitialStateType = {
    basket: Array<basketType>
    genres: Array<GenresType>
    landscapes: Array<PaitingsType>
    mountainLandscapes: Array<PaitingsType>
    seascapes: Array<PaitingsType>
    stillLife: Array<PaitingsType>
    positive: Array<PaitingsType>
    order: boolean
}

const initialState: InitialStateType = {
    basket: [] as Array<basketType>,
    genres:[
        {id: 1, imgName: back1, title: "Пейзажи", url: "/Gallary/Landscapes"},
        {id: 2, imgName: back2, title: "Горные пейзажи", url: "/Gallary/Mountain-landscapes"},
        {id: 3, imgName: back3, title: "Морские пейзажи", url: "/Gallary/Seascapes"},
        {id: 4, imgName: back4, title: "Натюрморты", url: "/Gallary/Still-life"},
        {id: 5, imgName: back5, title: "Позитив", url: "/Gallary/Positive"}
    ] as Array<GenresType>,
    landscapes:[
        { id: 101, imgName: img1, paintingName: "Березы освещенные солнцем", price: 10000, buttonState: true,  description: {meterial: "Холст маслом", size: "Размер: 55х74"} },
        { id: 107, imgName: img7, paintingName: "Дубы Петра Великого", price: 100000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 75х117"} },
        { id: 111, imgName: img11, paintingName: "Маки", price: 9000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х80"} },
        { id: 115, imgName: img15, paintingName: "Романтическая компазиция", price: 11000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 61х85"} }, 
        { id: 119, imgName: img19, paintingName: "Ясный осенний день", price: 12000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 66х77"} },
        { id: 120, imgName: img20, paintingName: "Зеленый рай", price: 8000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 70х80"} },
        { id: 121, imgName: img21, paintingName: "Лебединое озеро", price: 7000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 50х60"} },
        { id: 123, imgName: img23, paintingName: "Раннее, раннее утро...", price: 100000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 75х117"} },
        { id: 124, imgName: img24, paintingName: "Теплое утро", price: 13000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 55х75"} },
        { id: 125, imgName: img25, paintingName: "Тишина", price: 13000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х93"} },
        { id: 126, imgName: img26, paintingName: "Цветущая сладость", price: 11000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 73х92"} },
        { id: 127, imgName: img27, paintingName: "На берегу", price: 9000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х80"} },
        { id: 128, imgName: img28, paintingName: "Старый лес", price: 9000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 55х74"} },
        { id: 132, imgName: img32, paintingName: "Золотая осень", price: 12000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 66х77"} },
        { id: 133, imgName: img33, paintingName: "Возрождение", price: 8000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 70х80"} },
        { id: 134, imgName: img34, paintingName: "У пруда", price: 7000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 50х60"} },
        { id: 135, imgName: img35, paintingName: "Старое озеро", price: 100000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 75х117"} },
        { id: 137, imgName: img37, paintingName: "Одинокий жеребец", price: 13000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х93"} },
        { id: 138, imgName: img38, paintingName: "Луговые цветы", price: 11000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 73х92"} },
        { id: 140, imgName: img40, paintingName: "Прогулка", price: 9000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 55х74"} },
        { id: 143, imgName: img43, paintingName: "У моря", price: 10000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 61х91"} },
        { id: 144, imgName: img44, paintingName: "Белый парусник", price: 12000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 66х77"} },
        { id: 147, imgName: img47, paintingName: "Река в лесу", price: 100000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 75х117"} },
        { id: 151, imgName: img51, paintingName: "Холмы у дома", price: 9000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х80"} },
        { id: 152, imgName: img52, paintingName: "Весна", price: 9000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 55х74"} },
        { id: 155, imgName: img55, paintingName: "Тополя", price: 10000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 61х91"} },
        { id: 158, imgName: img58, paintingName: "Водопад", price: 7000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 50х60"} },
        { id: 159, imgName: img59, paintingName: "Дорога домой", price: 100000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 75х117"} },
        { id: 161, imgName: img61, paintingName: "Тропинка бежала вдоль", price: 13000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х93"} },
        { id: 163, imgName: img63, paintingName: "Березы у реки", price: 9000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х80"} },
        { id: 164, imgName: img64, paintingName: "Закат в степи ", price: 9000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 55х74"} },
        { id: 165, imgName: img65, paintingName: "Могучий лес прошу укрой", price: 9000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х70"} },
        { id: 174, imgName: img74, paintingName: "Яркая осень", price: 11000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 73х92"} },
        { id: 175, imgName: img75, paintingName: "Зеленая река", price: 9000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х80"} },
        { id: 176, imgName: img76, paintingName: "Дубы", price: 9000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 55х74"} }
    ],
    mountainLandscapes:[
        { id: 209, imgName: img9, paintingName: "Горный пейзаж", price: 13000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х93"} },
        { id: 230, imgName: img30, paintingName: "Одинокая гора", price: 7000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х70"} },
        { id: 236, imgName: img36, paintingName: "О далеких просторах мечтая", price: 13000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 55х75"} },
        { id: 250, imgName: img50, paintingName: "Пригорье", price: 11000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 73х92"} },
        { id: 260, imgName: img60, paintingName: "Хижина у гор", price: 13000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 55х75"} },
        { id: 269, imgName: img69, paintingName: "Хижина у водопада", price: 8000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 70х80"} },
    ],
    seascapes:[
        { id: 304, imgName: img4, paintingName: "Лазурное побережье", price: 12000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 66х77"} },
        { id: 313, imgName: img13, paintingName: "Побережье", price: 9000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х70"} },
        { id: 316, imgName: img16, paintingName: "Морской закат", price: 11000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х70"} },
        { id: 317, imgName: img17, paintingName: "Огненное небо", price: 13000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х70"} },
        { id: 318, imgName: img18, paintingName: "Нежное побережье", price: 10000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 61х91"} },
        { id: 329, imgName: img29, paintingName: "Холодные воды", price: 9000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х70"} },
        { id: 331, imgName: img31, paintingName: "Возвращение домой", price: 10000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 61х91"} },
        { id: 341, imgName: img41, paintingName: "Венеция", price: 9000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х70"} },
        { id: 349, imgName: img49, paintingName: "Курс на горизонт ", price: 13000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х93"} },
        { id: 354, imgName: img54, paintingName: "Розовое дерево у моря", price: 7000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х70"} },
        { id: 356, imgName: img56, paintingName: "Ранее утро в бухте", price: 12000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 66х77"} },
        { id: 357, imgName: img57, paintingName: "Каменный берег", price: 8000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 70х80"} },

    ],
    stillLife:[
        { id: 402, imgName: img2, paintingName: "Цветы на серебряном фоне", price: 7000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х70"} },
        { id: 403, imgName: img3, paintingName: "Цветы на столе", price: 10000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 61х91"} },
        { id: 405, imgName: img5, paintingName: "Яркие цветы", price: 8000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 70х80"} },
        { id: 406, imgName: img6, paintingName: "Цветы", price: 7000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 50х60"} },
        { id: 422, imgName: img22, paintingName: "Оранжевая фантазия", price: 7000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 50х60"} },
        { id: 439, imgName: img39, paintingName: "Цветы у берез", price: 9000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х80"} },
        { id: 442, imgName: img42, paintingName: "Цветы в вазе", price: 7000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х70"} },
        { id: 448, imgName: img48, paintingName: "Белая фантазия", price: 13000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 55х75"} },
        { id: 462, imgName: img62, paintingName: "Винный удел", price: 11000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 73х92"} },
        { id: 466, imgName: img66, paintingName: "Ягодно фруктовый натюрморт", price: 7000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х70"} },
        { id: 470, imgName: img70, paintingName: "Золотая коллекция", price: 9000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 55х74"} }

    ],
    positive:[
        { id: 508, imgName: img8, paintingName: "Не сон", price: 13000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 55х75"} },
        { id: 510, imgName: img10, paintingName: "К свету", price: 11000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 73х92"} },
        { id: 512, imgName: img12, paintingName: "Колбасы на всех не хватит", price: 9000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 55х74"} },
        { id: 514, imgName: img14, paintingName: "Кот приносящий удачу", price: 6000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 55х74"} },
        { id: 545, imgName: img45, paintingName: "Свидание", price: 8000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 70х80"} },
        { id: 546, imgName: img46, paintingName: "Сон моряка", price: 7000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 50х60"} },
        { id: 553, imgName: img53, paintingName: "Неожиданная встреча", price: 9000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х70"} },
        { id: 567, imgName: img67, paintingName: "Просвещение", price: 10000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 61х91"} },
        { id: 568, imgName: img68, paintingName: "Фантазия", price: 12000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 66х77"} },
        { id: 571, imgName: img71, paintingName: "В танце", price: 100000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 75х117"} },
        { id: 572, imgName: img72, paintingName: "Лошадь во сне", price: 13000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 55х75"} },
        { id: 573, imgName: img73, paintingName: "Весёлые музыканты", price: 13000, buttonState: true, description: {meterial: "Холст маслом", size: "Размер 60х93"} },
    ],
    order: false
}

export default initialState