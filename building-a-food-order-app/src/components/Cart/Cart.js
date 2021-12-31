import React, {useEffect, useContext} from "react";
import PropTypes from "prop-types";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";


const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
    const hastItem = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {};

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount : 1});
    };



    const cartItems = (
        <ul className={classes["cart-items"]}>
            {cartCtx.items.map(
                (item) => {
                    return <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                  />;
                }
            )}
        </ul>
    );

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
             props.onHideCart();
           }
         };
         window.addEventListener('keydown', handleEsc);
     
         return () => {
           window.removeEventListener('keydown', handleEsc);
         };
    }, []);

    return (
        <Modal onClose={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span> Total Amount </span>
                <span> {totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button-alt"]} onClick={props.onHideCart}>Close</button>
                { hastItem && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};

Cart.propTypes = {};

export default Cart;
