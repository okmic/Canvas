import initialState from "./canvasData"
import { Dispatch } from "redux"
const SEND_BASKET = 'SEND_BASKET'
const REMOVE_ITEM = 'REMOVE_ITEM'
const ORDER_STATUS = 'ORDER_STATUS'

const UPDATE_BUTTON_STATUS = "UPDATE_BUTTON_STATUS"
const MORE_OR_LESS = "MORE_OR_LESS"
const GENRES_FILTER = "GENRES_FILTER"
const REMOVE_FILTERS = "REMOVE_FILTERS"


const canvasReduser = (state = initialState, action: ActionsTypes) => {
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
        case REMOVE_ITEM: {
            if (state.basket) {
                return { ...state,
                basket: state.basket.filter(o => o.id !== action.payload),
                }
            } else {
                return state
            }
        }
        case ORDER_STATUS: {
            return {
                ...state,
                order: !state.order
            }
        }
        case UPDATE_BUTTON_STATUS:{
           return {...state, paintings: state.paintings.map(p => p.id === action.id ? { ...p, buttonState: !p.buttonState } : p)}
        }
        case MORE_OR_LESS: {
            if(action.order === 'more') {
                return {...state, paintings: state.paintings.sort((a, b) => a.price > b.price ? -1 : 1)}
            } else {
                return {...state, paintings: state.paintings.sort((a, b) => a.price > b.price ? 1 : -1)}
            }
        }
        case GENRES_FILTER: {
            return {...state, paintings: initialState.paintings.filter(item => item.id > action.id && item.id < action.id + 100)}
        }
        case REMOVE_FILTERS: {
            return {...state, paintings: initialState.paintings.sort((a, b) => a.id > b.id ? 1 : -1)}
        }
        default:
            return state;
    }
}

type ActionsTypes = SendBasketType | RemoveItemType | OrderStatusType | ButtonStateType | MoreOrLessType | GenresFilterType | RemoveFiltersType

type SendBasketType = {
    type: typeof SEND_BASKET
    id: number
    imgName: string,
    paintingName: string,
    price: number
}
export const sendBasket = (
    id: number,
    imgName: string,
    paintingName: string,
    price: number
    ): SendBasketType => ({ type: SEND_BASKET, id, imgName, paintingName, price})

type RemoveItemType = {type: typeof REMOVE_ITEM, payload: number}
export const removeItem = (id: number):RemoveItemType => ({ type: REMOVE_ITEM, payload: id })

type OrderStatusType = {type: typeof ORDER_STATUS}
export const orderStatus = ():OrderStatusType => ({ type: ORDER_STATUS})

type ButtonStateType = {type: typeof UPDATE_BUTTON_STATUS, id: number}
export const updateButtonStatus = (id: number):ButtonStateType => ({ type: UPDATE_BUTTON_STATUS, id})

type MoreOrLessType = {type: typeof MORE_OR_LESS, order: "more" | 'less'}
export const moreOrLess = (order: "more" | 'less'):MoreOrLessType => ({ type: MORE_OR_LESS, order})

type GenresFilterType = {type: typeof GENRES_FILTER, id: number}
export const genresFilter = (id: number):GenresFilterType => ({ type: GENRES_FILTER, id})

type RemoveFiltersType = {type: typeof REMOVE_FILTERS}
export const removeFilters = ():RemoveFiltersType => ({ type: REMOVE_FILTERS})

type DispatchType = Dispatch<ActionsTypes>

export const sendBasketTh = (        
    id: number,
    imgName: string,
    paintingName: string,
    price: number) => (dispatch: DispatchType) => {
    dispatch(sendBasket(id, imgName, paintingName, price));
}

export const removeItemTh = (id: number) => (dispatch: DispatchType) => {
    dispatch(removeItem(id))
}



export default canvasReduser