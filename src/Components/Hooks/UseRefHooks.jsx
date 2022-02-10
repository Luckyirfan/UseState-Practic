import React,{useRef,useState,useEffect} from 'react';

const UseRefHooks = () => {
    const inputRef =  useRef(null);
const [text, setText]=  useState("");
    const handleFocus =()=>{
        inputRef.current.focus();
    };
    useEffect(() => {
        inputRef.current.focus()
     }, []);
    return (
        <div>
            <h1> UseRef Hooks</h1>
            <input ref={inputRef} type="text" />
            {/* <button onClick={handleFocus}>focus the input box</button> */}
            <button onClick={handleFocus}>focus the input box</button>
        </div>
    );
};

export default UseRefHooks;