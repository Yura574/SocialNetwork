import {combineReducers, createStore} from "redux";
import {profile_reducer} from "./profile_reducer";
import {dialogs_reducer} from "./dialogs_reducer";
import {users_reducer} from "./users_reducer";
import {auth_reducer} from "./auth_reducer";

export const reducer = combineReducers({
    profilePage: profile_reducer,
    dialogsPage: dialogs_reducer,
    usersPage: users_reducer,
    auth: auth_reducer

})

export type StateType = ReturnType<typeof reducer>

export const store = createStore(reducer)

