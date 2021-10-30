import React from "react";
import classes from "./Main.module.css";
import {Route} from "react-router";
import {Profile} from "./Profile/Profile";
import {Dialogs} from "./Dialogs/Dialogs";
import {News} from "./News/News";
import {Music} from "./Music/Music";
import {Setting} from "./Setting/Setting";
import {ActionType, MessagesPage, ProfilePage} from "../../Redux/state";

type MainType = {
    messagesPage: MessagesPage
    profilePage: ProfilePage
    dispatch: (action: ActionType)=> void
}

export function Main(props: MainType) {

    return (
        <div className={classes.main}>
            <Route path={'/profile'} render={() => <Profile postData={props.profilePage.postData}
                                                            newPost={props.profilePage.newPost}
                                                            dispatch={props.dispatch}
            />}/>
            <Route path={'/dialogs'}
                   render={() => <Dialogs dialogsData={props.messagesPage.dialogsData}
                                          messageData={props.messagesPage.messageData}
                                          newMessage={props.messagesPage.newMessage}
                                          dispatch={props.dispatch}
                   />}/>
            <Route path={'/news'} render={() => <News/>}/>
            <Route path={'/music'} render={() => <Music/>}/>
            <Route path={'/setting'} render={() => <Setting/>}/>
        </div>
    )
}