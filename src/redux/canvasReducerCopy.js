import initialState from "./canvasData"

const SEND_BASKET = 'SEND_BASKET'
const REMOVE_ITEM = 'REMOVE_ITEM'
const ORDER_STATUS = 'ORDER_STATUS'



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
        default:
            return state;
    }
}

export const sendBasket = (id, imgName, paintingName, price) => ({ type: SEND_BASKET, id, imgName, paintingName, price})
export const removeItem = (id) => ({ type: REMOVE_ITEM, payload: id })
export const orderStatus = () => ({ type: ORDER_STATUS})

export const sendBasketTh = (id, imgName, paintingName, price) => (dispatch) => {
    dispatch(sendBasket(id, imgName, paintingName, price));
}
export const removeItemTh = (id) => (dispatch) => {
    dispatch(removeItem(id));

}

export default canvasReduser