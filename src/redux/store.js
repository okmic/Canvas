import { combineReducers, createStore } from "redux";
import canvasReduser from "./canvasReducer";


let redusers = combineReducers(
    {
        canvasReduser
    }
)

const store = createStore(redusers)


export default store;