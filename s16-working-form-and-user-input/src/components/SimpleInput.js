import React from "react";
import PropTypes from "prop-types";

const SimpleInput = (props) => {
    return (
        <form>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
    );
};

SimpleInput.propTypes = {};

export default SimpleInput;
