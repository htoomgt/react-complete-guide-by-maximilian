import React from 'react';
import PropTypes from 'prop-types';
import styleClasses from './Button.module.css';

const Button = props => {
    return (
        <button 
            type={props.buttonType} 
            className={`${styleClasses.submit_button}`} 
            onClick={props.clickHandler}
        >{props.children}</button>
    )
}

Button.propTypes = {
    buttonType: PropTypes.string.isRequired,    
    clickHandler: PropTypes.func
    
}

export default Button
