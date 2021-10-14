import { combineReducers, createStore } from "redux";
import appReducer from "./appReducer";
import canvasReduser from "./canvasReducer";

let redusers = combineReducers(
    {
        appReducer,
        canvasReduser
    }
)

const store = createStore(redusers)


export default store;