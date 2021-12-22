import React from 'react';
import PropTypes from 'prop-types';
import styleClasses from './Button.module.css';

const Button = props => {
    let buttonWidth = props.buttonWidth ? props.buttonWidth : '100%';

    return (
        <button 
            type={props.buttonType} 
            className={`${styleClasses.submit_button}`} 
            onClick={props.onClick}
            style={{width: buttonWidth}}
        >{props.children}</button>
    )
}

Button.propTypes = {
    buttonType: PropTypes.string.isRequired,    
    clickHandler: PropTypes.func
    
}

export default Button
