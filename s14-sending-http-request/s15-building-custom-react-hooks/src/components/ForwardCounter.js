import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import useCounter from '../hooks/user-count';

const ForwardCounter = props => {
    
    let counter = useCounter();


    return (
        <Card>{counter}</Card>
    )
}

ForwardCounter.propTypes = {

}

export default ForwardCounter
