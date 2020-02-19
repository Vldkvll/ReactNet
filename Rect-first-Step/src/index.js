import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Posts from "./components/Profile/MyPosts/Posts/Posts";

const postData = [
    {id:0, messenger: "Hello I'm very glad 2 see u!", likesCount: " 15"},
    {id:1, messenger: "Totally I'll be a nice developer!", likesCount: " 111"},
    {id:1, messenger: "I'm totally agree with you!", likesCount: " 8"},
    {id:1, messenger: "Be marvelous!", likesCount: " 12"},
    {id:1, messenger: "Handsome buddy!", likesCount: " 121"},
    {id:1, messenger: "U 'r too brilliant person!", likesCount: " 23"},
];

let dialogItemData = [
    {name: "Katya", id: "1"},
    {name: "Dima", id: "2"},
    {name: "Sasha", id: "3"},
    {name: "Luda", id: "4"},
    {name: "Anna", id: "5"},
];

let messagesData = [
    {id:0, message: "Hi! U 'r great!!!"},
    {id:1, message: "Whatsup?"},
    {id:2, message: "Hi there!"},
    {id:3, message: "Fine"},
    {id:4, message: "Second and First"},
];

ReactDOM.render(<App postsElements={postData} dialogItemData ={dialogItemData} messagesData={messagesData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
