import React from 'react'
import PropTypes from 'prop-types'
import styleClass from './Card.module.css';

const Card = props => {
    
    return (
        <div className={`${styleClass.card} ${props.className}`} onClick={props.onClick}>
             {props.children} 
        </div>
    )
}

Card.propTypes = {
    className: PropTypes.string
}

export default Card
