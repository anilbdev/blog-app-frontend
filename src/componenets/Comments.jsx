import React from 'react';

function Comments({comments}) {
  return <div>
    {
      comments.map((comment,index)=>(
        <div key={index}>
          <p>{comment.name}</p>
          <p>{comment.text}</p>
        </div>
      ))
    }
  </div>;
}

export default Comments;
