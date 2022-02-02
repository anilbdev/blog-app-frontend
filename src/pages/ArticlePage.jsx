import React from "react"
import { useParams } from "react-router-dom"
import "./ArticlePage.css"
import articleContent from "../data"

function ArticlePage() {
  const { name } = useParams()
  const article = articleContent.find(item => item.name === name)
  if(!article){
      return  <p>No article found</p> 
  }
  else{ 
  return (
    <div className="article-page">
      <h4>{article.title}</h4>
      <p>{article.description}</p>
    </div>
  )}
}

export default ArticlePage
