import React, { useEffect, useContext, useState } from "react";
import PropTypes from "prop-types";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);
    const [isCheckout, setIsCheckout] = useState(false);

    const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
    const hastItem = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const orderHandler = () => {
        setIsCheckout(true);
    };

    const submitOrderHandler = async (userData) => {
        setIsSubmitting(true);

        const response = await fetch(
            "https://react-http-tutorial-backend-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",
            {
                method: "POST",
                body: JSON.stringify({
                    user: userData,
                    orderedItems: cartCtx.items,
                }),
            }
        );

        setIsSubmitting(false);
        setDidSubmit(true);
        cartCtx.clearCart();
    };

    const cartItems = (
        <ul className={classes["cart-items"]}>
            {cartCtx.items.map((item) => {
                return (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        amount={item.amount}
                        price={item.price}
                        onRemove={cartItemRemoveHandler.bind(null, item.id)}
                        onAdd={cartItemAddHandler.bind(null, item)}
                    />
                );
            })}
        </ul>
    );

    const modalActions = (
        <div className={classes.actions}>
            <button
                className={classes["button-alt"]}
                onClick={props.onHideCart}
            >
                Close
            </button>
            {hastItem && (
                <button className={classes.button} onClick={orderHandler}>
                    Order
                </button>
            )}
        </div>
    );

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                props.onHideCart();
            }
        };
        window.addEventListener("keydown", handleEsc);

        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, []);

    const cartModalContent = (
        <section className={classes.containerSection}>
            {cartItems}
            <div className={classes.total}>
                <span> Total Amount </span>
                <span> {totalAmount}</span>
            </div>
            {isCheckout && (
                <Checkout
                    onConfirm={submitOrderHandler}
                    onCancel={props.onHideCart}
                />
            )}
            {!isCheckout && modalActions}
        </section>
    );

    const isSubmittingModalContent = <p>Sending Order data ...</p>;

    const didSubmitModalContent = 
    <React.Fragment>
        <p>Successfully sent the order!</p>
        <div className={classes.actions}>
            <button
                className={classes.button}
                onClick={props.onHideCart}
            >
                Close
            </button>
         </div>   
    </React.Fragment>;
        


    return <Modal onClose={props.onHideCart}>
        {!isSubmitting && !didSubmit && cartModalContent}
        {isSubmitting && isSubmittingModalContent}
        {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>;
};

Cart.propTypes = {};

export default Cart;
