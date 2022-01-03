import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
    console.log("App is running.");
    const [showParagraph, setShowParagraph] = useState(false);
    const [allowToggle, setAllowToggle] = useState(false);

    const toggleParagraph = useCallback(() => {
        if (allowToggle) {
            setShowParagraph(!showParagraph);
        }
    }, [allowToggle, showParagraph]);

    const allowToggleHandler = () => {
        setAllowToggle(!allowToggle);
        console.log(allowToggle);
    };

    return (
        <div className="app">
            <h1>Hi there!</h1>
            <DemoOutput show={showParagraph} />
            <Button onClick={allowToggleHandler}> Allow Toggling</Button>
            <Button onClick={toggleParagraph}> Toggle Paragraph</Button>
        </div>
    );
}

export default App;
