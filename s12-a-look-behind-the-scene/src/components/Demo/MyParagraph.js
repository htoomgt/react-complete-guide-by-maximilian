import React from 'react';

const MyParagraph = (props) => {
    console.log("My Paragraph is running.");
    return (        
        <p>{props.children}</p>
        
    );
}

export default MyParagraph;