import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth';
import counterSlice from './counter';


// import {createStore} from 'redux';






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





export const authActions = authSlice.actions;
export const counterActions = counterSlice.actions;
export default store;

