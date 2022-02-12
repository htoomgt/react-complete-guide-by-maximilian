import React, { useRef, useContext } from 'react';
import classes from './ProfileForm.module.css';
import {fireBaseAPIKey} from '../../config/envConfig';
import AuthContext from '../../store/auth-context';
import {useHistory} from 'react-router-dom';



const ProfileForm = () => {
  let history = useHistory();
  
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext)

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredPassword = newPasswordInputRef.current.value;

    //add validation
    
    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${fireBaseAPIKey}`,{
      method : 'POST',
      body: JSON.stringify({
        idToken : authCtx.token,
        password : enteredPassword,
        returnSecureToken : false
      }),
      headers:{
        'Content-Type' : 'application/json'
      }
    }).then(res => {
      // assumption : Always succeds!
      history.replace('/');
    });

  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPasswordInputRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;