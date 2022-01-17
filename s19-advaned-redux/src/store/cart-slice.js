import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    items: [],
    totalQuantity : 0,
    totalAmount : 0,
};

const cartSlice = createSlice({
    name: 'ui',
    initialState: initialState,
    reducers: {
        replaceCart: (state, action) => {
           state.totalQuantity = action.payload.totalQuantity;
           state.items = action.payload.items;        
        },
        addItem: (state, action) => {
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
            const id  = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            if(existingItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== id);
            }
            else{
                existingItem.quantity--;
            }



        },
    }
})

export default cartSlice;