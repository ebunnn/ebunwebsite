import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/CreatePost.css"
import { useNavigate } from "react-router-dom";

export default function CreatePost({user, setUser}) {
    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");

    let navigate = useNavigate();

    
    const handleSubmit = async (e) => {
      e.preventDefault();
      const postPayload = { userID: user.sub, title, postText, author: user.name };
      console.log("Post Payload:", postPayload);
      try {
          const response = await axios.post('http://localhost:4000/api/post-blog', { userID: user.sub, title, postText, author: user.name});
          console.log('Post created successfully:', response.data);
          setTitle('');
          setPostText('');
          navigate("/blog");
      } catch (error) {
          console.error('Failed to create post:', error);
      }
  };

  console.log("Username: " + user.name)

    return (
        <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create A Post</h1>
        <form onSubmit={handleSubmit}>
          <div className="inputGp">
            <label> Title:</label>
            <input
              placeholder="Title..."
              // grabs whatever the user input and sets it as the title state
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>
          <div className="inputGp">
            <label> Post:</label>
            <textarea
              placeholder="Post..."
              // grabs whatever the user input and sets it as the post text state
              onChange={(event) => {
                setPostText(event.target.value);
              }}
            />
          </div>
          <button type="submit"> Submit Post</button>
        </form>
      </div>
    </div>
    )
}