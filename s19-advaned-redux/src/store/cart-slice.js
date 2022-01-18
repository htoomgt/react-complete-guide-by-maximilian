import { createSlice } from '@reduxjs/toolkit';
import { uiActions } from './index';


const initialState = {
    items: [],
    totalQuantity : 0,    
    change : false
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        replaceCart: (state, action) => {
           state.totalQuantity = action.payload.totalQuantity;
           state.items = action.payload.items;        
        },
        addItem: (state, action) => {
            state.changed = true;
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            state.totalQuantity++;

            if (!existingItem) {

              state.items.push({
                id: newItem.id,
                price: newItem.price,
                quantity: 1,
                totalPrice: newItem.price,
                name: newItem.title
              });
            } else {
              existingItem.quantity++;
              existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
            
        },
        removeItem : (state, action) => {
            state.changed = true;
            const id  = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;    
            if(existingItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== id);
            }
            else{
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }



        },
    }
})



export default cartSlice;