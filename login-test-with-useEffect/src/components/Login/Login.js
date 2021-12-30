import React, { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../context/AuthContext';
import Input from '../UI/Input/Input';

const emailReducer = (state, action) => {
  

  if(action.type === "USER_INPUT"){
    return { value : action.val,  isValid : action.val.includes('@')  }  
  }

  if(action.type === "INPUT_BLUR"){
    return { value : state.value,  isValid : state.value.includes('@') }  
  }

  return { value : '',  isValid : false }
};

const passwordReducer = (state, action) => {
  if(action.type === "USER_INPUT"){
    return { value : action.val,  isValid : action.val.trim().length > 6  }
  }

  if(action.type === "INPUT_BLUR"){
    return { value : state.value,  isValid : state.value.trim().length > 6 }
  }

  return  { value : '',  isValid : false }
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailStates, dispatchEmail] = useReducer(emailReducer, {
     value : '',  isValid : null 

  });

  const [passwordStates, dispatchPassword] = useReducer(passwordReducer, {
    value : '',  isValid : null
  });

  const ctx = useContext(AuthContext);


  /* useEffect(() => {
    console.log('Effect running! ');

    return () => {
      console.log("Effect Clean Up")
    }
  }, [enteredEmail]); */


  const { isValid :  emailValid } = emailStates;
  const { isValid :  passwordValid } = passwordStates;

  useEffect(() => {

    const  identifier = setTimeout(() => {      
      console.log("Cleanup validity")
      setFormIsValid(
        emailValid && passwordValid
      );
    }, 500);

    return () => {
      console.log("Cleanup");
      clearTimeout(identifier);
    };

    
  }, [emailValid, passwordValid]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);

    /* setFormIsValid(
      event.target.value.includes('@') && enteredPassword.trim().length > 6
    ); */

    dispatchEmail({type : 'USER_INPUT', val : event.target.value});
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);

    /* setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes('@')
    ); */

    dispatchPassword({type : 'USER_INPUT', val : event.target.value});
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailStates.isValid);
    dispatchEmail({type : 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({type : 'INPUT_BLUR'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.onLogin(emailStates.value, passwordStates.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input 
          id="email"
          type="Email"
          label="Email"
          vaue={emailStates.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        
        <Input 
          id="password"
          type="password"
          label="Passwords"
          vaue={passwordStates.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />

        
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
