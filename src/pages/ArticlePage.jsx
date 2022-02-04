import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


import "./ArticlePage.css"
import articleContent from "../data"
import Comments from "../componenets/Comments"
import UpvoteSection from "../componenets/UpvoteSection"
import AddComments from "../componenets/AddComments"

function ArticlePage() {
  const { name } = useParams()
  const [articleData, setArticleData] = useState(null)
  const article = articleContent.find(item => item.name === name)

  useEffect(() => {
    fetchApi()
  }, [name])
  //! Fetch APi
  const fetchApi = async () => {
    const response = await fetch(`http://localhost:5000/api/article/${name}`)
    const article = await response.json()

    setArticleData(article)
  }
  if (!article || !articleData) {
    return <p>No article found</p>
  } else {
    // console.log("article state", articleData.comments)
    return (
      <div className="article-page">
        <h4>{article.title}</h4>
        <UpvoteSection name={name} setArticleData={setArticleData} articleData={articleData} />
        <p>{article.description}</p>
        <Comments comments={articleData.comments} />
        <AddComments name={name} setArticleData={setArticleData} articleData={articleData}/>
      </div>
    )
  }
}

export default ArticlePage
