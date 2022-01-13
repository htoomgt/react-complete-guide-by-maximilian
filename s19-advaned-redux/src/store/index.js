import { configureStore} from '@reduxjs/toolkit';
import cartSlice from './cart-slice';
import uiSlice from './ui-slice';


const store = configureStore({
    reducer : { 
        ui : uiSlice.reducer,
        cart : cartSlice.reducer,
    }
});


export const cartActions = cartSlice.actions;
export const uiActions = uiSlice.actions;

export default store;