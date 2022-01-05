import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import useCounter from '../hooks/user-count';

const BackwardCounter = props => {
   let counter = useCounter(false);



    return (
        <Card>{counter}</Card>
    )
}

BackwardCounter.propTypes = {

}

export default BackwardCounter
