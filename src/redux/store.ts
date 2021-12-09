import { applyMiddleware, combineReducers, createStore } from "redux";
import canvasReduser from "./canvasReducer";
import thunkMiddleware from "redux-thunk";

let redusers = combineReducers(
    {
        canvasReduser
    }
)
/* type basketDataType = {
    id: number
    imgName: string
    title: string
}
type basketType = [] | basketDataType

export type GenresType = {
    id: number
    imgName: string
    title: string
    url: string
}
export type PaitingsType = {
    id: number
    imgName: string
    paintingName: string
    price: number
    buttonState: boolean
    description: {
        meterial: string
        size: string
    }
}

export type AppStateType = {
    canvasReduser: {
        basket: Array<basketType>
        genres: Array<GenresType>
        landscapes: Array<PaitingsType>
        mountainLandscapes: Array<PaitingsType>
        seascapes: Array<PaitingsType>
        stillLife: Array<PaitingsType>
        positive: Array<PaitingsType>
        order: boolean
    }
} */

type RootReducerType = typeof redusers
export type AppStateType = ReturnType<RootReducerType>

/* type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
export type InferActionsTypes<T extends {[key: string]: (...arg: any) => any}> = ReturnType<PropertiesTypes<T>>
 */

const store = createStore(redusers, applyMiddleware(thunkMiddleware))


export default store;