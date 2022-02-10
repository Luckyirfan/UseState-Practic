import React,{useState,} from 'react';
import axios from 'axios';


const PostData = () => {
    const [userId,setUserId]=useState();
    const [title,setTitle]=useState();
    const [body,setBody]=useState();
    const postDetails=()=>{
        const request = {userId,title,body}
       axios.post("http://localhost:3000/Products",request)
    };

    return (
        <div> <h1>ADD DATA FOR DATABASE</h1>
            UserId :<input type="text"placeholder='userId' 
            onChange={(e)=>setUserId (e.target.value)} /> <br /><br />

            Title :-<input type="text"placeholder='title' 
            onChange={(e)=>setTitle (e.target.value)} /> <br /><br />

           Body :<input type="text"placeholder='body'  
            onChange={(e)=>setBody (e.target.value)}/><br /><br />
            <button onClick={postDetails} >Submit</button>
        </div>
    );
};

export default PostData;