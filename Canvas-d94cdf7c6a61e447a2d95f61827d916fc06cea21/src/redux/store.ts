import { applyMiddleware, combineReducers, createStore } from "redux";
import canvasReduser from "./canvasReducer";
import thunkMiddleware from "redux-thunk";
import { InitialStateType } from "./canvasData";

let redusers = combineReducers(
    {
        canvasReduser
    }
)
export type AppStateType = {
    canvasReduser: InitialStateType
}

const store = createStore(redusers, applyMiddleware(thunkMiddleware))


export default store;