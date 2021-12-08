import { applyMiddleware, combineReducers, createStore } from "redux";
import canvasReduser from "./canvasReducer";
import thunkMiddleware from "redux-thunk";

let redusers = combineReducers(
    {
        canvasReduser
    }
)

type RootReducerType = typeof redusers
export type AppStateType = ReturnType<RootReducerType>

/* type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
export type InferActionsTypes<T extends {[key: string]: (...arg: any) => any}> = ReturnType<PropertiesTypes<T>>
 */

const store = createStore(redusers, applyMiddleware(thunkMiddleware))


export default store;