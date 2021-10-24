import vlesu from '../components/img/canvas/1.jpg'
import cveti from '../components/img/canvas/2.jpg';
import z from '../components/img/canvas/3.jpg';
import zz from '../components/img/canvas/4.jpg';
import zzz from '../components/img/canvas/5.jpg';
import zzzz from '../components/img/canvas/6.jpg';
import q from '../components/img/canvas/7.jpg';
import qq from '../components/img/canvas/8.jpg';
import qqq from '../components/img/canvas/9.jpg';
import w from '../components/img/canvas/10.jpg';
import ww from '../components/img/canvas/11.jpg';
import www from '../components/img/canvas/12.jpg';
import e from '../components/img/canvas/13.jpg';
import ee from '../components/img/canvas/14.jpg';
import eee from '../components/img/canvas/15.jpg';



const SEND_BASKET = 'SEND_BASKET'
const REMOVE_ITEM = 'REMOVE_ITEM'
const REMOVE_STATUS = 'REMOVE_STATUS'
const REMOVE_STATUS_UP = 'REMOVE_STATUS_UP'
const ORDER_STATUS = 'ORDER_STATUS'

let initialState = {
    basket: [],
    paintingData: [
        { id: 1, imgName: vlesu, paintingName: "В лесу", price: 8000, buttonState: true, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam accusamus nobis possimus? Explicabo, ex quis unde sint atque quam animi distinctio officiis, laborum vero et iste cupiditate perferendis! Obcaecati." },
        { id: 2, imgName: cveti, paintingName: "Подсолнухи", price: 7000, buttonState: true, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam accusamus nobis possimus? Explicabo, ex quis unde sint atque quam animi distinctio officiis, laborum vero et iste cupiditate perferendis! Obcaecati." },
        { id: 3, imgName: z, paintingName: "Цветы", price: 7000, buttonState: true, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam accusamus nobis possimus? Explicabo, ex quis unde sint atque quam animi distinctio officiis, laborum vero et iste cupiditate perferendis! Obcaecati." },
        { id: 4, imgName: zz, paintingName: "Побережье", price: 9000, buttonState: true, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam accusamus nobis possimus? Explicabo, ex quis unde sint atque quam animi distinctio officiis, laborum vero et iste cupiditate perferendis! Obcaecati." },
        { id: 5, imgName: zzz, paintingName: "Натюрморт", price: 5000, buttonState: true, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam accusamus nobis possimus? Explicabo, ex quis unde sint atque quam animi distinctio officiis, laborum vero et iste cupiditate perferendis! Obcaecati." },
        { id: 6, imgName: zzzz, paintingName: "Цветы", price: 7000, buttonState: true, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam accusamus nobis possimus? Explicabo, ex quis unde sint atque quam animi distinctio officiis, laborum vero et iste cupiditate perferendis! Obcaecati." },
        { id: 7, imgName: q, paintingName: "Дубы Петра Великого", price: 30000, buttonState: true, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam accusamus nobis possimus? Explicabo, ex quis unde sint atque quam animi distinctio officiis, laborum vero et iste cupiditate perferendis! Obcaecati." },
        { id: 8, imgName: qq, paintingName: "Омега", price: 7000, buttonState: true, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam accusamus nobis possimus? Explicabo, ex quis unde sint atque quam animi distinctio officiis, laborum vero et iste cupiditate perferendis! Obcaecati." },
        { id: 9, imgName: qqq, paintingName: "Горный пейзаж", price: 9000, buttonState: true, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam accusamus nobis possimus? Explicabo, ex quis unde sint atque quam animi distinctio officiis, laborum vero et iste cupiditate perferendis! Obcaecati." },
        { id: 10, imgName: w, paintingName: "К свету", price: 7000, buttonState: true, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam accusamus nobis possimus? Explicabo, ex quis unde sint atque quam animi distinctio officiis, laborum vero et iste cupiditate perferendis! Obcaecati." },
        { id: 11, imgName: ww, paintingName: "Маки", price: 8000, buttonState: true, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam accusamus nobis possimus? Explicabo, ex quis unde sint atque quam animi distinctio officiis, laborum vero et iste cupiditate perferendis! Obcaecati." },
        { id: 12, imgName: www, paintingName: "Рыжие коты", price: 5000, buttonState: true, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam accusamus nobis possimus? Explicabo, ex quis unde sint atque quam animi distinctio officiis, laborum vero et iste cupiditate perferendis! Obcaecati." },
        { id: 13, imgName: e, paintingName: "Побережье", price: 9000, buttonState: true, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam accusamus nobis possimus? Explicabo, ex quis unde sint atque quam animi distinctio officiis, laborum vero et iste cupiditate perferendis! Obcaecati." },
        { id: 14, imgName: ee, paintingName: "Рыжий кот", price: 5000, buttonState: true, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam accusamus nobis possimus? Explicabo, ex quis unde sint atque quam animi distinctio officiis, laborum vero et iste cupiditate perferendis! Obcaecati." },
        { id: 15, imgName: eee, paintingName: "Романтическая компазиция", price: 11000, buttonState: true, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam accusamus nobis possimus? Explicabo, ex quis unde sint atque quam animi distinctio officiis, laborum vero et iste cupiditate perferendis! Obcaecati." },
        { id: 16, imgName: z, paintingName: "Побережье", price: 9000, buttonState: true, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam accusamus nobis possimus? Explicabo, ex quis unde sint atque quam animi distinctio officiis, laborum vero et iste cupiditate perferendis! Obcaecati." },
        { id: 17, imgName: zz, paintingName: "Цветы", price: 7000, buttonState: true, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam accusamus nobis possimus? Explicabo, ex quis unde sint atque quam animi distinctio officiis, laborum vero et iste cupiditate perferendis! Obcaecati." },
        { id: 18, imgName: zzz, paintingName: "Натюрморт", price: 8000, buttonState: true, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ullam accusamus nobis possimus? Explicabo, ex quis unde sint atque quam animi distinctio officiis, laborum vero et iste cupiditate perferendis! Obcaecati." }
    ],
    order: false
}

const canvasReduser = (state = initialState, action) => {
    switch (action.type) {
        case SEND_BASKET: {
            return {
                ...state,
                basket: [...state.basket, {
                    id: action.id,
                    imgName: action.imgName,
                    paintingName: action.paintingName,
                    price: action.price,
                }],
            }
        }
        case REMOVE_STATUS: {
            return { ...state, paintingData: state.paintingData.map(p => p.id === action.id ? { ...p, buttonState: !p.buttonState } : p) }
        }
        case REMOVE_STATUS_UP: {
            return { ...state, paintingData: state.paintingData.map(p => p.id === action.id ? { ...p, buttonState: !p.buttonState } : p) }
        }
        case REMOVE_ITEM: {
            return {
                ...state,
                basket: state.basket.filter(o => o.id !== action.payload),
            }
        }
        case ORDER_STATUS: {
            return {
                ...state,
                order: !state.order
            }
        }
        default:
            return state;
    }
}

export const sendBasket = (id, imgName, paintingName, price) => ({ type: SEND_BASKET, id, imgName, paintingName, price})
export const buttonBasketAC = (id) => ({ type: REMOVE_STATUS, id })
export const buttonBasketACUp = (id) => ({ type: REMOVE_STATUS_UP, id })
export const removeItem = (id) => ({ type: REMOVE_ITEM, payload: id })
export const orderStatus = () => ({ type: ORDER_STATUS})

export const sendBasketTh = (id, imgName, paintingName, price) => (dispatch) => {
    dispatch(sendBasket(id, imgName, paintingName, price));
}
export const removeItemTh = (id) => (dispatch) => {
    dispatch(removeItem(id));

}

export default canvasReduser