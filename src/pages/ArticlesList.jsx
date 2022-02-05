import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./ArticlesList.css"
import ArticleContent from "../data"
import axios from "axios"
function ArticlesList() {
  const [articles, setArticles] = useState([])

  const fetchArticles = () => {
    axios.get("http://localhost:5000/api/article")
    .then(response => {
      console.log('Ui-all article',response);
      setArticles(response.data)
    }).catch(error=>{
      console.log('Erro',error);
    })
  }
  useEffect(() => {
    fetchArticles()
  },[])
  return (
    <div className="articles-list-container">
      <h1>Articles List</h1>
      {articles.map((article, index) => (
        // <Link key={index} to={`/article/${article.name}`}>
        <p>
          {article.title}

        </p>
        // </Link>
      ))}
    </div>
  )
}

export default ArticlesList
