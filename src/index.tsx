import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';



export type DialogsElementType = {
    id: number
    name: string
}

export type MessageElementType = {
    id: number,
    message: string
}

export type PostDataType = {
    postData: Array<PostElementType>
}

export type DialogsDataType = {
    dialogsData: Array<DialogsElementType>
    messageData: Array<MessageElementType>
}
export type PostElementType = {
    id: number,
    message: string,
    like: number
}
export type DataType = {
    dialogsData: Array<DialogsElementType>
    messageData: Array<MessageElementType>
    postData: Array<PostElementType>
}


const dialogsData = [
    {id: 1, name: 'Yura'},
    {id: 2, name: 'Alenka'},
    {id: 3, name: 'Alenka'},
    {id: 4, name: 'Alenka'},
    {id: 5, name: 'Alenka'},
]

const messageData = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'What car is you bought?'},
    {id: 3, message: 'What '},
    {id: 4, message: 'What car '},
    {id: 5, message: 'What car is ?'},
    {id: 6, message: 'What car is you ?'},
    {id: 7, message: 'What car is you bought?'},
]

const postData = [
    {id: 1, message: 'My first post', like: 15},
    {id: 1, message: 'My second post', like: 20}
]


ReactDOM.render(
    <React.StrictMode>
        <App  postData={postData} messageData={messageData} dialogsData={dialogsData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
