import React, { useState } from 'react';
import axios from 'axios';

function AddComments({name}) {
const handleSubmitComment =()=>{
    axios.post(`http://localhost:5000/api/article/${name}/comments`,{
        name:user,
        text:comment
    })
}

    const [comment, setComment] = useState('');
    const [user, setUser] = useState('');
    console.log('comment--',comment);
  return <div>
      <div style={{display:'flex',flexDirection:'column'}}>
          <label htmlFor="">
              Your name
              <input onChange={(e)=>setUser(e.target.value)} value={user} type="text" />
          </label>
          <label htmlFor="">
              Enter comment
              <textarea onChange={(e)=>setComment(e.target.value)} value={comment} name="" id="" cols="30" rows="10"></textarea>
          </label>
          <button onClick={()=>handleSubmitComment()}>Add Comment</button>
      </div>
  </div>;
}

export default AddComments;
