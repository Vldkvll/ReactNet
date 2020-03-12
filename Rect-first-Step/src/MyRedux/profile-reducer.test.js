import profileReducer, {addPostActionCreator, deletePostActionCreator} from "./profile-reducer";
import ReactDOM from "react-dom";
import App from "../App";
import React from "react";


it ("after deleting amount messenger posts should be decrement if id is incorrect", () => {
    let actionCreator = deletePostActionCreator(11011);

    let state = {
        postData: [
            {id: 0, messenger: "Hello I'm very glad 2 see u!", likesCount: " 15"},
            {id: 1, messenger: "Totally I'll be a nice developer!", likesCount: " 111"},
            {id: 2, messenger: "I'm totally agree with you!", likesCount: " 8"},
            {id: 3, messenger: "Be marvelous!", likesCount: " 12"},
            {id: 4, messenger: "Handsome buddy!", likesCount: " 121"},
            {id: 5, messenger: "U 'r  brilliant person, too!", likesCount: " 23"},
        ],
    };

    let newState = profileReducer(state,actionCreator);

    expect(newState.postData.length).toBe(6);
});


// it ("after deleting amount messenger posts should be decrement", () => {
//     let actionCreator = deletePostActionCreator(5);
//
//         let state = {
//         postData: [
//             {id: 0, messenger: "Hello I'm very glad 2 see u!", likesCount: " 15"},
//             {id: 1, messenger: "Totally I'll be a nice developer!", likesCount: " 111"},
//             {id: 2, messenger: "I'm totally agree with you!", likesCount: " 8"},
//             {id: 3, messenger: "Be marvelous!", likesCount: " 12"},
//             {id: 4, messenger: "Handsome buddy!", likesCount: " 121"},
//             {id: 5, messenger: "U 'r  brilliant person, too!", likesCount: " 23"},
//         ],
//     };
//
//     let newState = profileReducer(state,actionCreator);
//
//     expect(newState.postData.length).toBe(5);
// });

// it ("length of post should be incremented", () => {
//     let actionCreator = addPostActionCreator("I'm amazing");
//     let state = {
//         postData: [
//             {id: 0, messenger: "Hello I'm very glad 2 see u!", likesCount: " 15"},
//             {id: 1, messenger: "Totally I'll be a nice developer!", likesCount: " 111"},
//             {id: 2, messenger: "I'm totally agree with you!", likesCount: " 8"},
//             {id: 3, messenger: "Be marvelous!", likesCount: " 12"},
//             {id: 4, messenger: "Handsome buddy!", likesCount: " 121"},
//             {id: 5, messenger: "U 'r  brilliant person, too!", likesCount: " 23"},
//         ],
//     };
//
//     let newState = profileReducer(state,actionCreator);
//
//     // expect(newState.postData.length).toBe(7);
//     expect(newState.postData[7].messenger).toBe("I'm amazing");
// });
