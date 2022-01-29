import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";

declare global {
    interface Window { store: any; }
}

let reducers = combineReducers({
        profilePage: profileReducer,
        dialogsPage: dialogsReducer
    }
)

export let store = createStore(reducers)

window.store = store


export type StoreType = ReturnType<typeof reducers>