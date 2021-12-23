import React from 'react';
import PropTypes from 'prop-types';

const Wrapper = props => {
    return props.children;
}

Wrapper.propTypes = {
    children: PropTypes.element.isRequired
}

export default Wrapper
