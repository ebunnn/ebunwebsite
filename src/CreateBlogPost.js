import React, { useState, useEffect } from "react";
import './CreateBlogPost.css'
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "./firebase-config";
import { useNavigate } from "react-router-dom";

export default function CreateBlogPost({ isAuth }) {
   // States for title and post text
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  var currentTime = new Date();
  var currentDate = new Date().toDateString();

  // this is how you identify the collection you want to add to
  const postsCollectionRef = collection(db, "blogPosts");
  let navigate = useNavigate();

  //Submits data to firestore and store in database
  const createPost = async () => {
    // addDoc allows you to add an entry to your database. Takes in collection name (from postsCollectionRef)
    // then you put in the schema of what you want
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
      time: currentTime.getHours().toString().concat(":").concat(currentTime.getMinutes().toString()),
      date: currentDate,
    });
    navigate("/blog");
  };

  // Prevents the user from going into the "create blog post" link if they are not logged in. It just redirects them to the login page
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create A Post</h1>
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
        <button onClick={createPost}> Submit Post</button>
      </div>
    </div>
  );
}
