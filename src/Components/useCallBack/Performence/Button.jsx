import React from 'react';

const Buttons = ({handleFunctions, children}) => {
    console.log("Buttons Comp Rendered",handleFunctions, children)
    return (
        <div>
            <h1>this is Button</h1>
        <button onClick={handleFunctions}>{children}</button>
        </div>
    );
};

export default React. memo(Buttons);