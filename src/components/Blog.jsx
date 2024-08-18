import React, { useState, useEffect } from "react";
import "../css/Blog.css"
import {Link} from "react-router-dom";
import axios from 'axios';
import Modal from "./Modal";


export default function Blog({user}) {

    const [posts, setPosts] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

    const fetchPosts = async () => {
        try {
            const response = await axios.get("http://localhost:4000/api/get-posts");
            setPosts(response.data);
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
            {Object.keys(user).length !== 0 && <button className="blog--createPostButton" role="button"><Link to="/create-post">Create Blog Post</Link></button>}
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
                            <h5>Written by: {post.author}</h5>
                            <p>{post.date}</p>
                            <p>{post.time}</p>
                            {/* {post.author === userName && <button onClick={() => handleDelete(post._id)}>Delete</button>} */}
                            {/* <button onClick={() => handleDelete(post._id)}>Delete</button>                        */}
                            <button onClick={() => setModalOpen(true)}>Delete</button>
                            <Modal modalOpen={modalOpen} handleClose={() => setModalOpen(false)}>
                                <div className="mx-auto my-4 w-48">
                                    <h3 className="text-2xl font-black text-[#C4A6D8]">Confirm Delete</h3>
                                    <p className="text-lg text-white">
                                    Are you sure you want to delete this post?
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    <button className="btn btn-danger w-full rounded-lg text-base bg-[#C4A6D8]" onClick={() => handleDelete(post._id)}>Delete</button>
                                    <button
                                    className="btn btn-light w-full bg-white text-black text-base rounded-lg"
                                    onClick={() => setModalOpen(false)}
                                    >
                                    Cancel
                                    </button>
                                </div>
                            </Modal>                     
                        </div>
                    </div>
                )
            })}
            
        </div>
    )
}