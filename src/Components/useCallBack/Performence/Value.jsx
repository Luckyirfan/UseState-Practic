import React from 'react';

const Value = ({text,count}) => {
    console.log("Value Comp Rendered",text,count);
    return (
        <div>
            <h1>THIS IS VALUE</h1>
<h1>{`${text}--- ${count}`}</h1>

        </div>
    );
};

export default React.memo (Value);