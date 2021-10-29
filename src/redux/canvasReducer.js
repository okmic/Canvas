import initialState from "./canvasData"

const SEND_BASKET = 'SEND_BASKET'
const REMOVE_ITEM = 'REMOVE_ITEM'
const ORDER_STATUS = 'ORDER_STATUS'

const LANDSCAPES_STATUS = "LANDSCAPES_STATUS"
const MOUNTAIN_STATUS = "MOUNTAIN_STATUS"
const SEASCAPES_STATUS = "SEASCAPES_STATUS"
const STILLLIFE_STATUS = "STILLLIFE_STATUS"
const POSITIVE_STATUS = "POSITIVE_STATUS"

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

export const sendBasket = (id, imgName, paintingName, price) => ({ type: SEND_BASKET, id, imgName, paintingName, price})
export const removeItem = (id) => ({ type: REMOVE_ITEM, payload: id })
export const orderStatus = () => ({ type: ORDER_STATUS})

export const landscapesStatus = (id) => ({ type: LANDSCAPES_STATUS, id})
export const mountainStatus = (id) => ({ type: MOUNTAIN_STATUS, id})
export const seascapesStatus = (id) => ({ type: SEASCAPES_STATUS, id})
export const stillLifeStatus = (id) => ({ type: STILLLIFE_STATUS, id})
export const positiveStatus = (id) => ({ type: POSITIVE_STATUS, id})




export const sendBasketTh = (id, imgName, paintingName, price) => (dispatch) => {
    dispatch(sendBasket(id, imgName, paintingName, price));
}
export const removeItemTh = (id) => (dispatch) => {
    dispatch(removeItem(id));

}



export default canvasReduser