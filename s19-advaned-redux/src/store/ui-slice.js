import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartIsVisible : false
};

const uiSlice = createSlice({
    name : 'ui',
    initialState : initialState,
    reducers : {
        toggleCartVisibility: (state) => { 
            // console.log(state.cartIsVisible);
            state.cartIsVisible = !state.cartIsVisible;
            // console.log(state.cartIsVisible);
        }
    }
});

export default uiSlice;