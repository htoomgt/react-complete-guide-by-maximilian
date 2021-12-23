import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Card from "./Card";
import Button from "./Button";
import StyleClasses from "./ErrorModal.module.css";


const Modal = (props) => {    

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

const ErrorModal = (props) => {
    return(
        <React.Fragment>
            {ReactDOM.createPortal(<Modal
                title={props.title}
                message={props.message}
                isVisible={props.isVisible}
                changeModalDisplayStatus={props.changeModalDisplayStatus}    
            />, document.getElementById("error-modal-root") 
            )}
            
        </React.Fragment>
    );
}

ErrorModal.propTypes = {};

export default ErrorModal;
