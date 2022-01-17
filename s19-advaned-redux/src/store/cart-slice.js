import { createSlice } from '@reduxjs/toolkit';
import { uiActions } from './index';


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
            state.totalQuantity--;    
            if(existingItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== id);
            }
            else{
                existingItem.quantity--;
            }



        },
    }
})

export const sendCartData = (cartData) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status : "pending",
            title : "Sending...",
            message :  "Sending cart data!",
          }));

          const sendRequest = async () => {
            const response = await fetch(
                "https://react-http-tutorial-backend-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
                {
                    method: "PUT",
                    body: JSON.stringify(cartData),
                }
            );
    
            if(!response.ok){
              throw new Error("Sending Cart Data Failed!")
            }
          }

          try {
            await sendRequest();
      
            dispatch(
              uiActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Sent cart data successfully!',
              })
            );
          } catch (error) {
            dispatch(
              uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed!',
              })
            );
          }
          

        
    }
}

export default cartSlice;