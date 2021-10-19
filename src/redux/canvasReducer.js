const SEND_BASKET = 'SEND_BASKET'
const COMPUTE_ARRAY = 'COMPUTE_ARRAY'

let initialState = { 
    basket: [],
    computeForBasket: 0
 }

const canvasReduser = (state = initialState, action) => {
    switch (action.type) {
        case SEND_BASKET:

            let body = action.body;
            let i = state.basket.length + 1;

            console.log(i)
            return {
                ...state,
                basket: [...state.basket, {imgName: body}],
                computeForBasket: i++,
            };
            case COMPUTE_ARRAY:
                debugger
                let array = action.array
                console.log(array)
               return{ 
                   ...state,
                   computeForBasket: [...state.computeForBasket, array]
            }

        default:
            return state;
    }
}

export const sendBasket = (body, i) => ({ type: SEND_BASKET, body, i})
export const computeArray = (array) => ({type: COMPUTE_ARRAY, array})

export const initializeApp = (body) => (dispatch) => {
            dispatch(sendBasket(body));
            console.log(body)
}


export default canvasReduser