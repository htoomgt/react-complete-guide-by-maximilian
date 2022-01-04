import classes from './User.module.css';
import React, { Component } from 'react';


/* const User = (props) => {
  return <li className={classes.user}>{props.name}</li>;
};

export default User; */




class User extends Component {
  componentWillMount() {
    console.log('User will unmount!')
  }

  render() {
    return (
      <li className={classes.user}>{this.props.name}</li>
    );
  }
}

export default User;


