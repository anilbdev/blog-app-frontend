import React from "react"
import { Link } from "react-router-dom"
import "./ArticlesList.css"
import ArticleContent from "../data"
function ArticlesList() {
  return (
    <div className="articles-list-container">
      <h1>Articles List</h1>
      {ArticleContent.map((article, index) => (
        <Link key={index} to={`/article/${article.name}`}>
          {article.title}
        </Link>
      ))}
    </div>
  )
}

export default ArticlesList
