import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {userReducer} from "./userReducer";
import {authReducer} from "./authReducer";

declare global {
    interface Window {
        store: any;
    }
}

let reducers = combineReducers({
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        usersPage: userReducer,
        auth: authReducer
    }
)

export let store = createStore(reducers)

window.store = store


export type StoreType = ReturnType<typeof reducers>