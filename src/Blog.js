import React, { useEffect } from "react";
import "./Blog.css"
import {Link} from "react-router-dom";
import { collection, deleteDoc, getDocs, doc } from "firebase/firestore";
import {db, auth } from "./firebase-config"


export default function Blog({isAuth}) {

    const [postLists, setPostList] = React.useState([]);
    const postsCollectionRef = collection(db, "blogPosts");

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getPosts();
    });

    const deletePost = async (id) => {
        const postDoc = doc(db, "blogPosts", id);

        await deleteDoc(postDoc);
    };
    return(
        <div className="blog--container">
            <h1 className="blog--welcome">Blogs</h1>
            <p className="blog--description">Hello! Welcome to my Blogs page. Feel free to read through the blogs or add one of your own!</p>
            {/* If the user is logged in, then display the "create blog post" link, if not, dont display it */}
            <button className="blog--createPostButton" role="button"> {!isAuth ? <p></p> : <Link to="/create-blog-post">Create Blog Post</Link>}</button>
            {/* {!isAuth ? <p></p> : <Link to="/create-blog-post">Create Blog Post</Link>} */}
            {postLists.map((post) => {
                return (
                    <div className="blog--container">
                        <br></br>
                        <br></br>
                        <hr></hr>
                        <br></br>
                        <div className="blog--title"><h3>{post.title}</h3></div>
                        <div className="blog--postText">
                            <p>{post.postText}</p>
                            {/* <h5>Written by: {post.author.name}</h5> */}
                        </div>
                        <div className="blog--postDetails">
                            <h5>Written by: {post.author.name}</h5>
                            {isAuth && post.author.id === auth.currentUser.uid && <button className="blog--deletePost" onClick={() => {deletePost(post.id)}}>Delete</button>}
                            <p>{post.date}</p>
                            <p>{post.time}</p>
                        </div>
                        {/* <div className="blog--deletePost">
                            {isAuth && post.author.id === auth.currentUser.uid && <button onClick={() => {deletePost(post.id)}}>Delete</button>}
                        </div> */}
                        {/* <div className="blog--dateTime">
                            <p>{post.date}</p>
                            <p>{post.time}</p>
                        </div> */}
                       
                    </div>
                )
            })}
        </div>
    )
}