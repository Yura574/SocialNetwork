import {combineReducers, createStore} from "redux";
import {profile_reducer} from "./profile_reducer";
import {dialogs_reducer} from "./dialogs_reducer";

export const reducers = combineReducers({
    profilePage: profile_reducer,
    messagesPage: dialogs_reducer

})

export const store = createStore(reducers)

