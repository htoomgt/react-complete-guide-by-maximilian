import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store';

const CartButton = (props) => {

  const dispatch = useDispatch();
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    console.log('toggle Cart handler');
    dispatch(uiActions.toggleCartVisibility());
  }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
