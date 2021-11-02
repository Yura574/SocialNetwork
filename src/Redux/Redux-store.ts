import {combineReducers, createStore} from "redux";
import {profile_reducer} from "./profile_reducer";
import {dialogs_reducer} from "./dialogs_reducer";

export const reducer = combineReducers({
    profilePage: profile_reducer,
    dialogsPage: dialogs_reducer

})

export type StateType = ReturnType<typeof reducer>

export const store = createStore(reducer)

