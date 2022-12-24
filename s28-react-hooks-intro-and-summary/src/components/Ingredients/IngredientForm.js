import React, { useState, useContext } from "react";

import Card from "../UI/Card";
import "./IngredientForm.css";
import LoadingIndicator from "../UI/LoadingIndicator";
import { AuthContext } from "../../context/auth-context";

const IngredientForm = React.memo((props) => {
    const [inputState, setInputState] = useState({ title: "", amount: "" });
    const authContext = useContext(AuthContext);

    const submitHandler = (event) => {
        event.preventDefault();
        props.onSubmitForm(inputState);
        
    };

    const logoutHandler = (event) => {
        event.preventDefault();
        authContext.logout();
    }

    console.log("RENDERING INGREDIENT FORM");

    return (
        <section className="ingredient-form">
            <Card>
                <form onSubmit={submitHandler}>
                    <div className="form-control">
                        <label htmlFor="title">Name</label>
                        <input
                            type="text"
                            id="title"
                            value={inputState.title}
                            onChange={(e) =>
                              setInputState((prevState) => ({ ...prevState, title: e.target.value }))
                            }
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="amount">Amount</label>
                        <input
                            type="number"
                            id="amount"
                            value={inputState.amount}
                            onChange={(e) =>
                              setInputState((prevState) => ({ ...prevState, amount: e.target.value }))
                            }
                        />
                    </div>
                    <div className="ingredient-form__actions">
                        <button type="submit" disabled={props.loading}>                        
                          Add Ingredient
                        </button>
                        <button onClick={logoutHandler}>Logout</button>
                        {props.loading && <LoadingIndicator /> }  
                    </div>
                </form>
            </Card>
        </section>
    );
});

export default IngredientForm;
