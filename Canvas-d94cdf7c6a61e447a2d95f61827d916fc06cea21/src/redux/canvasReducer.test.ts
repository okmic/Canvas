import initialState, { InitialStateType } from "./canvasData";
import canvasReduser, { landscapesStatus, orderStatus, sendBasket } from "./canvasReducer";

let state: InitialStateType;

beforeEach(() => {
    state = initialState
})

test('sendBasket', () => {
    const newState = canvasReduser(state, sendBasket(1, "name", "paint", 3))
    expect(newState.basket[0].id).toBe(1)
    expect(newState.basket[0].imgName).toBe("name")
    //@ts-ignore
    expect(newState.basket[0].paintingName).toBe("paint")
     //@ts-ignore
    expect(newState.basket[0].price).toBe(3)
})
test('orderStatus', () => {
    const newState = canvasReduser(state, orderStatus())
    expect(newState.order).toBeTruthy
})
test('landscapesStatus', () => {
    const newState = canvasReduser(state, landscapesStatus(101))
    expect(newState.landscapes[0].buttonState).toBe(false)
})
