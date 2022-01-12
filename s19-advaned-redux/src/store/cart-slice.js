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
        addItem: (state, action) => {
            const newItem  = action.payload;
            const existingItem = state.item.find(item => item.id === newItem.id)

            if(!existingItem){
                state.items.push({
                    itemId : newItem.id,
                    name : newItem.title,
                    price : newItem.price,
                    quantity : 1,
                    totalPrie : newItem.price
                });
            }
            else{
                existingItem.quantity += 1;
                existingItem.totalPrice = existingItem.price * existingItem.quantity;
            }
        },
        removeItem : (state, action) => {},
    }
})

export default cartSlice;