// import React from 'react'
// import ReactDOM from 'react-dom';
// import redux from 'redux'

const redux = require('redux')
const createStore = redux.createStore
const BUY_CAKE = 'BUY_CAKE'


function buyCake() { //action createor function
    return {
        type: BUY_CAKE,
        info: 'First react app'
    }    
}

const initialState = {
    numOfCake : 10
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCake : state.numOfCake - 1
        }

        default: return state
    }
} 

const store = createStore(reducer)
console.log('instial state: ', store.getState())
const unSbscribe = store.subscribe(() => console.log('updated state: ', store.getState()))
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unSbscribe();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
