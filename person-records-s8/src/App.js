import './App.css';
import env from "react-dotenv";
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
import React, { useState, Fragment } from 'react';

function App() {

  let users_init_data = [];

  const [userData, setUserData] = useState(users_init_data);

  const addUserHandler = (user) => {
    setUserData((prevState) => {
      return [...prevState, user];
    });
    
  }


  return (
    <Fragment>
      <div className="appContainer">
        
        <AddUser onSaveUser={addUserHandler}/>

        <UserList users={userData}/>
        
      </div>
    </Fragment>
  );
}

export default App;
