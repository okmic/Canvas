import { applyMiddleware, combineReducers, createStore } from "redux";
import canvasReduser from "./canvasReducer";
import thunkMiddleware from "redux-thunk";

let redusers = combineReducers(
    {
        canvasReduser
    }
)
const store = createStore(redusers, applyMiddleware(thunkMiddleware))


export default store;