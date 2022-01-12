import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartIsVisible : false
};

const uiSlice = createSlice({
    name : 'ui',
    initialState : initialState,
    reducers : {
        toggleCartVisibility: (state) => {  
            state.cartIsVisible = !state.cartIsVisible;
        }
    }
});

export default uiSlice;