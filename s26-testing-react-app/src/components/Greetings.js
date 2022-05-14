import { useState } from 'react';

import Output from './Output';

const Greeting = () => {
    const [changeText, setChangedText] = useState(false);

    const changeTextHandler = () => {
        setChangedText(true);
    }



    return <div>
        <h2>Hello World!</h2>

        {!changeText &&<Output> It is good to see you!</Output> }
        {changeText &&<Output> Changed!</Output> }

        <button onClick={changeTextHandler}  >Chagne Text</button>
    </div>
};

export default Greeting;

