import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartIsVisible : false,
    notification : null,
};

const uiSlice = createSlice({
    name : 'ui',
    initialState : initialState,
    reducers : {
        toggleCartVisibility: (state) => { 
            // console.log(state.cartIsVisible);
            state.cartIsVisible = !state.cartIsVisible;
            // console.log(state.cartIsVisible);
        },
        showNotification : (state, action) => {
            state.notification = {...action.payload};
        }
    }
});

export default uiSlice;