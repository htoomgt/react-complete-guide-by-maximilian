import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import classes from './AddMovie.module.css';

const AddMovie = (props) => {
    const titleRef = useRef();
    const openingTextRef = useRef();
    const releaseDateRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();        
        const movie = {
            title : titleRef.current.value,
            openingText : openingTextRef.current.value,
            releaseDate : releaseDateRef.current.value
        }

        props.onAddMovie(movie);
        
        titleRef.current.value = '';
        openingTextRef.current.value = '';
        releaseDateRef.current.value = '';
    }

    return (
        <form onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="title"> Title </label>
                <input type="text" id="title" ref={titleRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="openningText"> Openning Text </label>
                <textarea id="openningText" ref={openingTextRef}></textarea>
            </div>
            <div className={classes.control}>
                <label htmlFor="releaseDate"> Release Date </label>
                <input type="date" id="releaseDate" ref={releaseDateRef} />
            </div>

            <button>Add Movie</button>

        </form>
    )
}

AddMovie.propTypes = {

}

export default AddMovie
