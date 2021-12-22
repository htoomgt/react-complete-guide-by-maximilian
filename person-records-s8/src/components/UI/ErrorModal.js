import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import Button from "./Button";
import StyleClasses from "./ErrorModal.module.css";

const ErrorModal = (props) => {
    

    return (
        <Card
            className={`
            ${StyleClasses.modal}
            ${
                props.isVisible 
                    ? StyleClasses.modal_display
                    : StyleClasses.modal_hide
            }
        `}
        >
            
            <div className={`${StyleClasses.modal_content}`}>
            
                    <h2>{props.title}</h2>
               
                
                <p>{props.message}</p>
                
                <p style={{textAlign : 'center'}}>
                <Button 
                    buttonType="button" 
                    onClick={props.changeModalDisplayStatus}
                    buttonWidth="25%"
                >                    
                    OK
                </Button>
                </p>
            </div>
        </Card>
    );
};

ErrorModal.propTypes = {};

export default ErrorModal;
