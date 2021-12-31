import React, {useRef} from "react";
import PropTypes from "prop-types";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {



    return (
        <React.Fragment>
            <div className={classes.input}>
                <label htmlFor={props.id}>{props.label}</label>
                <input ref={ref} {...props.input} />
            </div>
        </React.Fragment>
    );
});

Input.propTypes = {};

export default Input;
