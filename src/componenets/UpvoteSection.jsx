import React from 'react';

function UpvoteSection({name,setArticleData,articleData}) {

    const fetchUpvotes =async ()=>{
        const response = await fetch(`http://localhost:5000/api/article/${name}/upvotes`,{
            method:'post'
        })
        const body =await response.json()
        setArticleData(body)
    }
  return <div>
      <button onClick={()=>fetchUpvotes()} >Upvote</button>
      <p>This article has {articleData.upvotes} upvotes</p>
  </div>;
}

export default UpvoteSection;
