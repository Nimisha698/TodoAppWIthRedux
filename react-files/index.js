import React from 'react';
import { render } from "react-dom";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import App from './containers/App';
import { Provider } from 'react-redux';
import axios from 'axios';
const initialState = {
    list: []
};

const addTask = (state = initialState, action) => {
    switch (action.type) {
        case "updateState":
            state = {
                ...state,
                list: action.payload
            }
        case "add":
            if (action.payload.taskName != null) {
                axios.post('http://localhost:8080/addTask',
                    {
                        "taskName": action.payload.taskName
                    })
                    .then(res => { console.log(res); })

                state = {
                    ...state,
                    list: [...state.list, action.payload]
                };
            }
            break;
        case "delete":
            let array = [...state.list];
            console.log(array)
            let to_be_deleted = action.payload;
            for (let i = 0; i < array.length; i++) {
                if (array[i].taskName === to_be_deleted) {
                    axios.post('http://localhost:8080/deleteTask',
                        {

                            "taskName": array[i].taskName,
                            "taskId": array[i].taskId
                        }).then(res => {
                            console.log(res);
                        })
                        .catch(res => {
                            console.log(res);
                        }
                        )

                    array.splice(i, 1);
                }
            }
            state = {
                ...state,
                list: array
            }
            break;
        case "edit":
            let newtask = prompt("Enter the new task");
            axios.post('http://localhost:8080/editTask', [
                action.payload,
                newtask
            ]).then(res => {
                console.log(res);
            })
                .catch(res => {
                    console.log(res);
                }
                )
            state =
                {
                    ...state,
                    list: state.list.map((item) => {
                        if (item.taskName === action.payload) {
                            return { taskName: newtask };
                        }
                        else { return item; }
                    })
                }
            break;
    }
    return state;
};
const changeS = (state = initialState, action) => {
    switch (action.type) {
        case "change":
            break;
    }
    return state;
}
const store = createStore(combineReducers({ addTask, changeS }));
store.subscribe(() => {
    console.log("Store updated", store.getState());
});
render(
    <Provider store={store}>
        <App />
    </Provider>,
    window.document.getElementById('root'));

