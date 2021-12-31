import React, {useReducer} from 'react';
import PropTypes from 'prop-types';
import CartContext from './cart-context';

const defatulCartState = {
    items : [],
    totalAmount : 0
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        const updatedItem = state.items.concat(action.item);
        const updatedTotalAmount =  state.totalAmount + action.item.price * action.item.amount;

        return {
            items : updatedItem,
            totalAmount : updatedTotalAmount
        };
        
    }
    else if(action.type === 'REMOVE'){
        return state.items.splice(action.id, 1);
    }
    else{
        return defatulCartState;
    }

    
}

const CartProvider = props => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defatulCartState);




    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item});
    }

    const removeItemToCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id});
    }

    const cartContext = {
        items: cartState.items,
        totalAmount : cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

CartProvider.propTypes = {

}

export default CartProvider
