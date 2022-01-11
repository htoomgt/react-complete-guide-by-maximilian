import { Component } from 'react';
import classes from './Counter.module.css';
import { useSelector, useDispatch, connect } from 'react-redux';
import {INCREMENT, DECREMENT, INCREASE, TOGGLE_COUNTER} from '../store/index';




const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state =>  state.counter);
  const showCounter = useSelector(state => state.showCounter);

  const increment = () => {
    dispatch({ type: INCREMENT });

  };

  const increaseHandler = () => {
    dispatch({ type : DECREMENT, amount : 5 });
  }

  const decrement = () => {
    dispatch({ type: INCREASE });
  }

  const toggleCounterHandler = () => {
    dispatch({ type: TOGGLE_COUNTER })
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && 
        <div className={classes.value}> {counter} </div>
      }
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

/* class Counter extends Component {


  incrementHandler() {
    this.props.increment();
  }

  decrementHandler(){
    this.props.decrement();
  }

  toggleCounterHandler(){

  }


  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}> {this.props.counter} </div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateTopProps = state => {
  return {
    counter: state.counter
  };
}

const mapDispatchToProps = dispatch => {
  return {
    increment : () => dispatch({ type: 'INCREMENT' }),
    decrement : () => dispatch({ type: 'DECREMENT' }),
  }
}

export default connect(mapStateTopProps, mapDispatchToProps)(Counter); */


