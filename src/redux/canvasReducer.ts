import initialState from "./canvasData"
import { Dispatch } from "redux"
const SEND_BASKET = 'SEND_BASKET'
const REMOVE_ITEM = 'REMOVE_ITEM'
const ORDER_STATUS = 'ORDER_STATUS'

const LANDSCAPES_STATUS = "LANDSCAPES_STATUS"
const MOUNTAIN_STATUS = "MOUNTAIN_STATUS"
const SEASCAPES_STATUS = "SEASCAPES_STATUS"
const STILLLIFE_STATUS = "STILLLIFE_STATUS"
const POSITIVE_STATUS = "POSITIVE_STATUS"

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
        case LANDSCAPES_STATUS:{
           return {...state, landscapes: state.landscapes.map(p => p.id === action.id ? { ...p, buttonState: !p.buttonState } : p)}
        }
        case MOUNTAIN_STATUS:{
            return {...state, mountainLandscapes: state.mountainLandscapes.map(p => p.id === action.id ? { ...p, buttonState: !p.buttonState } : p)}
        }
        case SEASCAPES_STATUS:{
            return {...state, seascapes: state.seascapes.map(p => p.id === action.id ? { ...p, buttonState: !p.buttonState } : p)}
        }
        case STILLLIFE_STATUS:{
            return {...state, stillLife: state.stillLife.map(p => p.id === action.id ? { ...p, buttonState: !p.buttonState } : p)}
        }
        case POSITIVE_STATUS:{
            return {...state, positive: state.positive.map(p => p.id === action.id ? { ...p, buttonState: !p.buttonState } : p)}
        }
        default:
            return state;
    }
}

type ActionsTypes = SendBasketType | RemoveItemType | OrderStatusType | LandscapesStatusType
| MountainStatusType | SeascapesStatusType | PositiveStatusType | StillLifeStatusType

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

type LandscapesStatusType = {type: typeof LANDSCAPES_STATUS, id: number}
export const landscapesStatus = (id: number):LandscapesStatusType => ({ type: LANDSCAPES_STATUS, id})

type MountainStatusType = {type: typeof MOUNTAIN_STATUS, id: number}
export const mountainStatus = (id: number):MountainStatusType => ({ type: MOUNTAIN_STATUS, id})

type SeascapesStatusType = {type: typeof SEASCAPES_STATUS, id: number}
export const seascapesStatus = (id: number):SeascapesStatusType => ({ type: SEASCAPES_STATUS, id})

type StillLifeStatusType = {type: typeof STILLLIFE_STATUS, id: number}
export const stillLifeStatus = (id: number):StillLifeStatusType => ({ type: STILLLIFE_STATUS, id})

type PositiveStatusType = {type: typeof POSITIVE_STATUS, id: number}
export const positiveStatus = (id: number):PositiveStatusType => ({ type: POSITIVE_STATUS, id})

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