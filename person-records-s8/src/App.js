import './App.css';
import env from "react-dotenv";
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
import React, { useState } from 'react';

function App() {

  let users_dummy_data = [
    {
      id : "p-001",
      username : "John Doe",
      age : 31
    },
    {
      id : "p-002",
      username : "Aung Soe",
      age : 23
    },
    {
      id : "p-003",
      username : "Hla Hla",
      age : 42
    },
  ];

  const [userData, setUserData] = useState(users_dummy_data);

  const addUserHandler = (user) => {
    setUserData((prevState) => {
      return [...prevState, user];
    });
    
  }


  return (
    <div className="appContainer">
      
      <AddUser onSaveUser={addUserHandler}/>

      <UserList users={userData}/>
      
    </div>
  );
}

export default App;
