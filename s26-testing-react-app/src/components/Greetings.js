import { useState } from 'react';

const Greeting = () => {
    const [changeText, setChangedText] = useState(false);

    const changeTextHandler = () => {
        setChangedText(true);
    }



    return <div>
        <h2>Hello World!</h2>

        {!changeText &&<p> It is good to see you!</p> }
        {changeText &&<p> Changed!</p> }

        <button onClick={changeTextHandler}  >Chagne Text</button>
    </div>
};

export default Greeting;

