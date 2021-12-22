import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = props => {
    return (
        <button type="submit" className="submit_button" >{props.buttonText}</button>
    )
}

Button.propTypes = {
    buttonText: PropTypes.string.isRequired
}

export default Button
