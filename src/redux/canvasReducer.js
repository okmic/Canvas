const SEND_BASKET = 'SEND_BASKET';

let initialState = { 
    basket: [],
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ]
 }

const canvasReduser = (state = initialState, action) => {
    switch (action.type) {
        case SEND_BASKET:
            let body = action.body;
            console.log("added body")
            return {
                ...state,
                basket: [...state.basket, {imgName: body}]
            };
        default:
            return state;
    }
}

export const sendBasket = (body) => ({type: SEND_BASKET, body})

export const initializeApp = (body) => (dispatch) => {
            dispatch(sendBasket(body));
}


export default canvasReduser