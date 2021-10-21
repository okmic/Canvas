import { applyMiddleware, combineReducers, createStore } from "redux";
import appReducer from "./appReducer";
import canvasReduser from "./canvasReducer";
import thunkMiddleware from "redux-thunk";

let redusers = combineReducers(
    {
        appReducer,
        canvasReduser
    }
)

const store = createStore(redusers, applyMiddleware(thunkMiddleware))


export default store;