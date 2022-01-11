// import {createStore} from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { 
        counter : 0, 
        showCounter: true

    };



const counterSlice = createSlice({
    name: 'counter',
    initialState : initialCounterState,
    reducers : {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

const initialAuthState = {
    isAuthenticated : false
};

const authSlice = createSlice({
    name : 'authentication',
    initialState : initialAuthState,
    reducers: {
        login(state){
            state.isAuthenticated = true
        },
        logout(state){
            state.isAuthenticated = false
        }
    }
});

/* export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREASE = 'INCREASE';
export const TOGGLE_COUNTER = 'TOGGLE_COUNTER';


const counterReducer = (state = initialState , action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1,
               
            };
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1,                
            };
        case INCREASE:
            return{
                ...state,
                counter: state.counter + action.amount
            };
        case TOGGLE_COUNTER:
            return {
                ...state,
                showCounter: !state.showCounter
            }    
        
        default:
            return state;
    }
} 

const store = createStore(counterReducer);
*/




const store = configureStore({
    reducer: {
        counter : counterSlice.reducer ,
        auth : authSlice.reducer
    }
});



export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;

