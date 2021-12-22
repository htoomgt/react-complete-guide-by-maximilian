    import React, { useState} from 'react'
    import PropTypes from 'prop-types';
    import './AddUser.css';
    import Button from '../UI/Button';
    import Card from '../UI/Card';
    import { v4 as uuidv4 } from 'uuid';
    
    const AddUser = props => {

        const [username, setUsername] = useState('');
        const [usernameValid, setusernameValid] = useState(false);
        const [age, setAge] = useState('');
        const [ageValid, setAgeValid] = useState(false);
        const [isFormValid, setIsFormValid] = useState(false);
        const [newForm, setNewForm] = useState(true);

        
        


        const usernameChangeHandler = (event) => {
            let usernameVal = event.target.value;
            setUsername(usernameVal);
            setNewForm(false);

            if(usernameVal.trim().length === 0){
                setusernameValid(false);
            }
            else{
                setusernameValid(true);                
            }
            formValidityCheck();
        }

        const ageChangeHandler = (event) => {
            let ageVal = event.target.value;
            setAge(ageVal);
            setNewForm(false);


            if(ageVal.trim().length === 0){
                setAgeValid(false);
            }            
            else{
                setAgeValid(true);
            }

            formValidityCheck();
            
        }

        const formValidityCheck = () => {
            if(usernameValid && ageValid){
                setIsFormValid(true);                
            }
            else{
                setIsFormValid(false);
                
            }
            
        }



        const addUserHandler = (event) => {
            event.preventDefault();
            setNewForm(false);           
            

            formValidityCheck();

            if(isFormValid){
                const addingUser = {
                    id : uuidv4(),
                    username: username,
                    age: age
                };
                
    
                props.onSaveUser(addingUser);
    
                resetForm();

                
            }
            else{
                
                alert("Form is not valid re-check your input!");
            }

            
        }

        const resetForm = () => {
            setUsername('');
            setAge('');
            setusernameValid(false);
            setAgeValid(false);
            setNewForm(true);
            setIsFormValid(false);
        }



        return (
            <Card >
                <form onSubmit={addUserHandler} className="frm_user_input">
                    <div 
                        className={`
                            user_input_control                            
                            ${!newForm ? (!usernameValid ? 'invalid' : '') : ''}
                        `}
                            
                    
                        >
                        
                        <label htmlFor="username"> Username : </label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username"  
                            onChange={usernameChangeHandler}
                            value={username}
                        />
                    </div>

                    <div className={`
                            user_input_control                            
                            ${!newForm ? (!ageValid ? 'invalid' : '') : ''}
                        `}
                    
                    >
                        <label htmlFor="age"> Age (year) : </label>
                        <input 
                            type="number" 
                            id="age" 
                            name="age"  
                            onChange={ageChangeHandler}
                            value={age}
                            min="1"
                            max="120"
                            
                        />
                    </div>

                    

                    <Button 
                        buttonText="Add User"
                    />
                </form>
            </Card>
        )
    }
    
    AddUser.propTypes = {
        onSaveUser : PropTypes.func.isRequired
    }
    
    export default AddUser
    