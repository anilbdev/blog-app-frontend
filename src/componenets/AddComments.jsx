import React, { useState } from "react"
import axios from "axios"
import useForm from "../customHooks/useForm"

function AddComments({ name, setArticleData }) {
  // custom hook
  const [value, setValue] = useForm({ user: "", text: "" })

  // saving comments api
  const handleSubmitComment = () => {
    axios
      .post(`http://localhost:5000/api/article/${name}/comments`, {
        name: value.user,
        text: value.text,
      })
      .then(response => {
        setArticleData(response.data)
      })
  }


  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="">
          Your name
          <input
            name="user"
            onChange={setValue}
            value={value.user}
            type="text"
          />
        </label>
        <label htmlFor="">
          Enter comment
          <textarea
            onChange={setValue}
            value={value.text}
            name="text"
            cols="30"
            rows="10"
          ></textarea>
        </label>
        <button onClick={() => handleSubmitComment()}>Add Comment</button>
      </div>
    </div>
  )
}

export default AddComments
