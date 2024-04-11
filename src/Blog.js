import React, { useState, useEffect } from "react";
import "./Blog.css"
import {Link} from "react-router-dom";
import axios from 'axios';
import { collection, deleteDoc, getDocs, doc } from "firebase/firestore";
import {db, auth } from "./firebase-config"


export default function Blog({isAuth}) {

    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try {
            const response = await axios.get("http://localhost:4000/api/get-posts");
            setPosts(response.data);
            console.log(posts)
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    const handleDelete = async (postId) => {
        try {
            await axios.delete(`http://localhost:4000/api/delete-post/${postId}`);
            setPosts(posts.filter(post => post._id !== postId));
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);


    return(
        <div className="blog--container">
            <h1 className="blog--welcome">Blogs</h1>
            <p className="blog--description">Hello! Welcome to my Blogs page. Feel free to read through the blogs or add one of your own!</p>
            {/* If the user is logged in, then display the "create blog post" link, if not, dont display it */}
            {/* <button className="blog--createPostButton" role="button"> <Link to="/create-post">Create Blog Post</Link></button> */}
            <button className="blog--createPostButton" role="button"> {!isAuth ? <p></p> : <Link to="/create-post">Create Blog Post</Link>}</button>
            {posts.map(post => {
                return (
                    <div className="blog--posts-container">
                        <br></br>
                        <br></br>
                        <hr></hr>
                        <br></br>
                        <div className="blog--title"><h3>{post.title}</h3></div>
                        <div className="blog--postText">
                            <p>{post.postText}</p>
                        </div>
                        <div className="blog--postDetails">
                            <h5>Written by: {auth.currentUser.displayName}</h5>
                            <p>{post.date}</p>
                            <p>{post.time}</p>
                            <button onClick={() => handleDelete(post._id)}>Delete</button>                       
                        </div>
                    </div>
                )
            })}
            
        </div>
    )
}