import React from 'react'
import PropTypes from 'prop-types'
import './Card.css';

const Card = props => {
    const className = 'card ' + (props.className || '');
    return (
        <div className={className}>
             {props.children} 
        </div>
    )
}

Card.propTypes = {

}

export default Card
