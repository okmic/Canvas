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

export type basketType = {
    id: number
    imgName: string
    title: string
}

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
    paintings: Array<PaitingsType>
    order: boolean
}
/* <button onClick={() => Genres(0, 200)}>Landscapes</button>
<button onClick={() => Genres(200, 300)}>Mountain landscapes</button>
<button onClick={() => Genres(300, 400)}>Seascapes</button>
<button onClick={() => Genres(400, 500)}>Still lifes</button>
<button onClick={() => Genres(500, 1000)}>Positive</button> */
const initialState: InitialStateType = {
    basket: [] as Array<basketType>,
    genres:[
        {id: 100, imgName: back1, title: "Landscapes", url: "/Gallary/Landscapes"},
        {id: 200, imgName: back2, title: "Mountain landscapes", url: "/Gallary/Mountain-landscapes"},
        {id: 300, imgName: back3, title: "Seascapes", url: "/Gallary/Seascapes"},
        {id: 400, imgName: back4, title: "Still lifes", url: "/Gallary/Still-life"},
        {id: 500, imgName: back5, title: "Positive", url: "/Gallary/Positive"}
    ] as Array<GenresType>,
    paintings:[
        { id: 101, imgName: img1, paintingName: "Birch trees lit by the sun", price: 1000, buttonState: true,  description: {meterial: "Oil on canvas", size: "Size: 55х74"} },
        { id: 107, imgName: img7, paintingName: "Oaks of Peter the Great", price: 10000, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 75х117"} },
        { id: 111, imgName: img11, paintingName: "Poppies", price: 900, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 60х80"} },
        { id: 115, imgName: img15, paintingName: "Romantic composition", price: 1100, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 61х85"} }, 
        { id: 119, imgName: img19, paintingName: "Clear autumn day", price: 1200, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 66х77"} },
        { id: 120, imgName: img20, paintingName: "Green paradise", price: 800, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 70х80"} },
        { id: 121, imgName: img21, paintingName: "Swan Lake", price: 700, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 50х60"} },
        { id: 123, imgName: img23, paintingName: "Early, early morning ...", price: 10000, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 75х117"} },
        { id: 124, imgName: img24, paintingName: "Warm morning", price: 1300, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 55х75"} },
        { id: 125, imgName: img25, paintingName: "Silence", price: 1300, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 60х93"} },
        { id: 126, imgName: img26, paintingName: "Blooming sweetness", price: 1100, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 73х92"} },
        { id: 127, imgName: img27, paintingName: "On the shore", price: 900, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 60х80"} },
        { id: 128, imgName: img28, paintingName: "Old forest", price: 900, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 55х74"} },
        { id: 132, imgName: img32, paintingName: "Golden autumn", price: 1200, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 66х77"} },
        { id: 133, imgName: img33, paintingName: "Revival", price: 800, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 70х80"} },
        { id: 134, imgName: img34, paintingName: "By the pond", price: 700, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 50х60"} },
        { id: 135, imgName: img35, paintingName: "Old lake", price: 10000, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 75х117"} },
        { id: 137, imgName: img37, paintingName: "Lonely stallion", price: 1300, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 60х93"} },
        { id: 138, imgName: img38, paintingName: "Луговые цветы", price: 1100, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 73х92"} },
        { id: 140, imgName: img40, paintingName: "Meadow flowers", price: 900, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 55х74"} },
        { id: 143, imgName: img43, paintingName: "By the sea", price: 1000, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 61х91"} },
        { id: 144, imgName: img44, paintingName: "White sailboat", price: 1200, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 66х77"} },
        { id: 147, imgName: img47, paintingName: "River in the forest", price: 10000, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 75х117"} },
        { id: 151, imgName: img51, paintingName: "Hills by the house", price: 900, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 60х80"} },
        { id: 152, imgName: img52, paintingName: "Spring", price: 900, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 55х74"} },
        { id: 155, imgName: img55, paintingName: "Poplars", price: 1000, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 61х91"} },
        { id: 158, imgName: img58, paintingName: "Waterfall", price: 700, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 50х60"} },
        { id: 159, imgName: img59, paintingName: "Way home", price: 10000, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 75х117"} },
        { id: 161, imgName: img61, paintingName: "The path ran along", price: 1300, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 60х93"} },
        { id: 163, imgName: img63, paintingName: "Birches by the river", price: 900, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 60х80"} },
        { id: 164, imgName: img64, paintingName: "Sunset in the steppe", price: 900, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 55х74"} },
        { id: 165, imgName: img65, paintingName: "Mighty forest", price: 900, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 60х70"} },
        { id: 174, imgName: img74, paintingName: "Bright autumn", price: 1100, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 73х92"} },
        { id: 175, imgName: img75, paintingName: "Green river", price: 900, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 60х80"} },
        { id: 176, imgName: img76, paintingName: "Oak trees", price: 900, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 55х74"} },
        { id: 209, imgName: img9, paintingName: "Mountain landscape", price: 1300, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 60х93"} },
        { id: 230, imgName: img30, paintingName: "Lonely mountain", price: 700, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 60х70"} },
        { id: 236, imgName: img36, paintingName: "Dreaming of distant expanses", price: 1300, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 55х75"} },
        { id: 250, imgName: img50, paintingName: "Hillside", price: 1100, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 73х92"} },
        { id: 260, imgName: img60, paintingName: "Hut by the mountains", price: 1300, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 55х75"} },
        { id: 269, imgName: img69, paintingName: "The hut by the waterfall", price: 800, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 70х80"} },
        { id: 304, imgName: img4, paintingName: "Cote d'azur", price: 1200, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 66х77"} },
        { id: 313, imgName: img13, paintingName: "Coast", price: 900, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 60х70"} },
        { id: 316, imgName: img16, paintingName: "Sea sunset", price: 1100, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 60х70"} },
        { id: 317, imgName: img17, paintingName: "Fiery sky", price: 1300, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 60х70"} },
        { id: 318, imgName: img18, paintingName: "Delicate beach", price: 1000, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 61х91"} },
        { id: 329, imgName: img29, paintingName: "Cold waters", price: 900, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 60х70"} },
        { id: 331, imgName: img31, paintingName: "Homecoming", price: 1000, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 61х91"} },
        { id: 341, imgName: img41, paintingName: "Venice", price: 900, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 60х70"} },
        { id: 349, imgName: img49, paintingName: "Heading to the horizon", price: 1300, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 60х93"} },
        { id: 354, imgName: img54, paintingName: "Pink tree by the sea", price: 700, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 60х70"} },
        { id: 356, imgName: img56, paintingName: "Early morning in the bay", price: 1200, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 66х77"} },
        { id: 357, imgName: img57, paintingName: "Stone coast", price: 800, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 70х80"} },
        { id: 402, imgName: img2, paintingName: "Flowers on a silver background", price: 700, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 60х70"} },
        { id: 403, imgName: img3, paintingName: "Flowers on the table", price: 1000, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 61х91"} },
        { id: 405, imgName: img5, paintingName: "Bright flowers", price: 800, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 70х80"} },
        { id: 406, imgName: img6, paintingName: "Flowers", price: 700, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 50х60"} },
        { id: 422, imgName: img22, paintingName: "Orange fantasy", price: 700, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 50х60"} },
        { id: 439, imgName: img39, paintingName: "Flowers by the birches", price: 900, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 60х80"} },
        { id: 442, imgName: img42, paintingName: "Flowers in a vase", price: 700, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 60х70"} },
        { id: 448, imgName: img48, paintingName: "White fantasyя", price: 1300, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 55х75"} },
        { id: 462, imgName: img62, paintingName: "Wine fate", price: 1100, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 73х92"} },
        { id: 466, imgName: img66, paintingName: "Berry still life", price: 700, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 60х70"} },
        { id: 470, imgName: img70, paintingName: "Golden Collection", price: 900, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 55х74"} },
        { id: 508, imgName: img8, paintingName: "Not a dream", price: 1300, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 55х75"} },
        { id: 510, imgName: img10, paintingName: "To the light", price: 1100, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 73х92"} },
        { id: 512, imgName: img12, paintingName: "There is not enough sausage for everyone", price: 900, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 55х74"} },
        { id: 514, imgName: img14, paintingName: "Happy cat", price: 600, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 55х74"} },
        { id: 545, imgName: img45, paintingName: "Вate", price: 800, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 70х80"} },
        { id: 546, imgName: img46, paintingName: "Sailor's dream", price: 700, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 50х60"} },
        { id: 553, imgName: img53, paintingName: "Unexpected meeting", price: 900, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 60х70"} },
        { id: 567, imgName: img67, paintingName: "Education", price: 1000, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 61х91"} },
        { id: 568, imgName: img68, paintingName: "Fantasy", price: 1200, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 66х77"} },
        { id: 571, imgName: img71, paintingName: "In dance", price: 10000, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 75х117"} },
        { id: 572, imgName: img72, paintingName: "A horse in a dream", price: 1300, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 55х75"} },
        { id: 573, imgName: img73, paintingName: "Cheerful musicians", price: 1300, buttonState: true, description: {meterial: "Oil on canvas", size: "Size 60х93"} },
    ],
    order: false
}

export default initialState