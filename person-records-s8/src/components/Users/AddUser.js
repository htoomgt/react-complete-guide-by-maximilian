import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import styleClasses from "./AddUser.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {
    const usernameInputRef = useRef();
    const ageInputRef = useRef();

    const [username, setUsername] = useState("");
    const [usernameValid, setusernameValid] = useState(false);
    const [age, setAge] = useState("");
    const [ageValid, setAgeValid] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const [newForm, setNewForm] = useState(true);
    const [displayModal, setDisplayModal] = useState(false);
    const [errorModalTitle, setErrorModalTitle] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const usernameChangeHandler = (event) => {
        let usernameVal = event.target.value;
        setUsername(usernameVal);
        

        if (usernameVal.trim().length === 0) {
            setusernameValid(false);
        } else {
            setusernameValid(true);
        }
        formValidityCheck();
    };

    const ageChangeHandler = (event) => {
        let ageVal = event.target.value;
        setAge(ageVal);       

        if (ageVal.trim().length === 0) {
            setAgeValid(false);
        } else {
            setAgeValid(true);
        }

        formValidityCheck();
    };

    const formValidityCheck = () => {
        if (usernameValid && ageValid) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    };

    const addUserHandler = (event) => {
        event.preventDefault();
        
        const enteredName = usernameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        setNewForm(false);

        formValidityCheck();

        if (isFormValid) {
            const addingUser = {
                id: uuidv4(),
                username: enteredName,
                age: enteredAge,
            };

            props.onSaveUser(addingUser);

            resetForm();

           /*  Swal.fire({
                title: "User Added!",
                text: "User has been added successfully!",
                icon: "success",
                confirmButtonText: "OK",
            }); */
            setErrorModalTitle("Success");
            setErrorMessage("User has been added successfully!");
            setDisplayModal(true);
        } else {
           /*  Swal.fire({
                title: "Form is not valid!",
                text: "Please check your input!",
                icon: "error",
                confirmButtonText: "OK",
            }); */

            setErrorModalTitle("Error");
            setErrorMessage("Please check your input!");
            setDisplayModal(true);
        }
    };

    const resetForm = () => {
        setUsername("");
        setAge("");        
        setusernameValid(false);
        setAgeValid(false);
        setNewForm(true);
        setIsFormValid(false);
    };

    const changeModalDisplayStatus = () => {
        setDisplayModal(false);        
    }

    return (
        <>
            <ErrorModal 
                title={errorModalTitle} 
                message={errorMessage}
                isVisible={displayModal}
                changeModalDisplayStatus={changeModalDisplayStatus}
            />

            <Card className={`${styleClasses.user_input_control}`}>
            <form onSubmit={addUserHandler}>
                <div
                    className={`                            
                            ${
                                !newForm
                                    ? !usernameValid
                                        ? styleClasses.invalid
                                        : ""
                                    : ""
                            }
                        `}
                >
                    <label htmlFor="username"> Username : </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        onChange={usernameChangeHandler}
                        value={username}
                        ref={usernameInputRef}
                    />
                </div>

                <div
                    className={`                                  
                            ${!newForm ? (!ageValid ? styleClasses.invalid : "") : ""}
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
                        ref={ageInputRef}
                    />
                </div>

                <Button buttonType="submit"  >Add User</Button>
            </form>
        </Card>
       </>
        
    );
};

AddUser.propTypes = {
    onSaveUser: PropTypes.func.isRequired,
};

export default AddUser;
